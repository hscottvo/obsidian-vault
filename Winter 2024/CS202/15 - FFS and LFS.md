original UFS: have to find block -> write to block over and over for all blocks
## Fast File System (FFS)
- aware of underlying structure of disk
- notice that similar use cases use files in similar locations
## Locality is Important
- groups of directories into _cylinder groups_
	- belong on same track: in cylinder
	- can be on different disks, as long as same distance to the disk center
	- consecutive cylinders: head doesn't have to move as much
- much larger block size than UFS (4-8k vs 512)
	- why not bigger? similar idea to page size for memory
	- only use 1 byte of data in the page? The rest of the bytes are wasted
- inodes can be middle of the disk
	- superblock still at top, but unlike UFS superblock -> inode -> data, do it based on locality
### Cylinder groups
- FFS stores redundant copy of superblock
	- superblock stored on top of logical address space
	- benefit: also locality
	- downside: can waste space