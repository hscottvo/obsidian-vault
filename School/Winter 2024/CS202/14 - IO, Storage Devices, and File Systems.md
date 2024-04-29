- how IO works in system as background
- move onto storage devices
	- hdd and ssd
## I/O Hardware
### Block Device
- store info in fixed-size block
	- block size based on config or type of hardware
- can read/write blocks independently
- can read any block if you know where it is
### Character Device
- shows a stream of characters
- not really searchable. data just flows in and have to process
- `get` and `put` 
#### Polling Vs Interrupt
- _polling_: CPU just keeps checking if the I/O is done or not
	- simple to implement: everything is handled by the software
	- efficient for very short I/O operations
		- may just have to wait a very short time w/o context switching
	- but may waste CPU cycles, especially if very long-running I/O operations
		- ex: moving 1tb of data, keep checking for a long time
- _interrupt-driven_
	- only needs to initiate I/O operation, then when it's done just interrupr
	- can be more or less efficient than polling. Only less for very short
	- but overhead: mode switch, context switch, interrupt handling
		- only makes a real impact if very short I/O times
		- like if nanosecond-tier i/o
## Direct Memory Access
- even small microcontrollers have DMA
- whole purpose: bypass cpu to copy data between memory devices & i/o
- can think of DMA controller as "assistant"
	- offload memory operations to DMA C
	- CPU can in the meantime can do other stuff or go to low power mode
## I/O Software Layers
- device-independent i/o software
	- abstraction & api that allows user application to actually use the i/o without knowing the details of the hardware
- device drivers: device-specific code. used by dev-ind io soft. 
## Improving I/O Performance
- general guidelines: 
	- many io operations need context switch
		- at the least go to kernel and go back to user space
		- write 1 byte 1000 times slower than 1000 bytes 1 time: only 1 syscall for latter
	- reduce data copying
		- whenever you are transmitting data/copy data from 1 place to another one (mem to device), it needs help from the kernel
			- send a pointer to the kernel, kernel copy user space data to kernel mem, then kernel copy data to device memory
			- kernel nota single entity, maybe multiple layers (driver, interupt nadle etc from slide 8)
		- copying data causes a lot of overhead. Better to minimize data copies
			- try 0-copy operations(?)
		- Reduce interrupts by using large transfers
			- same as from 1. Don't make multiple small data copies, better to send 1-time large data copy
			- short io: use polling instead
		- More processing prims into hardware if possible:
			- if controller of device can look directly, can let the device copy the data instead of using hte CPU to do that
		- balance CPU, mem, bus, io performance for highest
			- obvious: it is the main goal
## Storage Devices
### HDD
- _seek time_: Get the head to the right track (swing head's arm)
- _rotational latency_: Get the disk to spin to the right place
- _transfer time_: got head and disk to the right place? then spend some time doing actual reading/wrriting
- disk io time has 3 above summed + `software queue (device driver)`, then `hardware controller`
- want higher bandwidth: _want to transfer large group of blocks sequentially_
	- seek & rotation time kind of wasted, not doing any actually writing or anything
	- sequential reads: minimize seek/rotation time 
### Flash
- challenge: write size different from read size
- edit? Have to erase and rewrite onto the erased block
#### Write Amplification
- instead of a page, invalidate old pages and rewrite to another section of the block
- single write attempt can trigger garbage collection (lot of time)
#### Deletes
- deleting file doesn't wipe the page. just the metadata
	- GC doesn't know this, will copy dead files
	- new command `trim` can tell what exactly needs to be GC'd
## Interfacing Storage Device and File System
### Logical Block Addressing
- most are linear addressable
	- interface for OS. doesn't need to know
	- if OS does know, can be more efficient
- filesystems can just map where the data should be located on which position in teh device
## Files
- has data itself and the metadata
- directories stored as a specific type of file. stored just like a file in the storage device
- content of the file: list of entries in the directories, metadata for directory
- slide 36: passwd group etc is metadata
### Core FS Objects
- `superblock` - all the global metadata
	- usually 1st block
### Zooming in on Inode
- too small block size -> waste a lot of space on metadata
- in order to keep inode size small and fixed size, but still support larger files, can use multiple levels of dereferencing
- inodes htemself doesn't keep track of file paths
	- only location of logical addressing space of where the data is located