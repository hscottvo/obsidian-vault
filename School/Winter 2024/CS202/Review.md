## OS Organization
1. true/false: mode switching from kernel to user is triggered by interrupt, traps, system calls
	1. true
2. segfault not handled by os
	1. false: fault handled by os
3. interrupr can be enabled by user-level for synch purpose
	1. false: this is a rpiviledged instruction
4. page faults are unrecoverable
	1. false: recoverable
5. true about OS kernel?
	1. executes about process: false
		1. not running as a process, 
	2. always running? no
	3. shoudl exceute as little as possible: true
6. what does synchronous mean ?
	1. always occurs after exec of specific function
7. MC: 
	1. not modula 3
	2. not an emulator (qemu is)
	3. supports virtual mem
	4. does support 64bit
	5. does support multi-processor schedulign
8. syscall functions in xv6 implemented in assmebly
	1. C
9. xv6 follows microkernel
	1. monolithic
10. risc-v version of xv6 uses (1mb) page size
	1. 4kb

## Processes and Threads
- each thread has separate address space: _false_
	- process have sep, thread shares within process
- first process creates all others
- uLT better than kernel level
	- more lightweight, less context switch (kernel)
	- application-specific scheduling available
- 2 + 4 + 8
## Virtual Memory
- userlevel process can choose page size?
	- false
- multi-level paging
	- reduce avg mem access time: false (multiple accesses)
	- reduce runtime overhead of page fault handling: false (nothing to do with MLPT)
	- reduce spatial overhead of table: true
	- thread belonging to same process can use diff tables: false
		- all use same page table within process
- CopyOnWrite
	- CoW: reduce cost of fork(): true
	- defer alloc of phys mem until write attempt happen: true
	- shared pages are read & write protected: false
		- write-protected but not read-protected
		- everyone can read however they want
	- CoW does not require MMU: false
		- all vmem relies on MMU
## Extensibility: OS Structure
- spin: user-lv process can directly access kernel code: false
	- 
- exokernel follows monolthic arch 