### Slide 6
- data integrity: race conditions on transactions
	- usually not same constraints, things like comments don't have to be in sync
	- things like social media can use NoSQL

### Slide 15
#11-29-2023
- can use indices like traditional databases
- just applies for each component instead of entire database

### Slide 16
- doesn't require adding index
	- no index -> mongodb makes one
- define your own index: specify $1$ or $-1$ to do ascending/descending respectively
#### multi-key vs single-key index
- traditional b-tree: single-key
	- index entry points to a single record
- multikey: have to use different idea
	- multiple index entries point to a single record (if indexed on array col etc)
	- can't be clustered index
### Slide 17 - Index Types
- geospatial index: use *geohash* 
	- split data in half: left 0 and right 1. that is first bit of the hash value
	- recurse
	- geospatial indices are not uncommon even in traditional databases
	- mongodb big-data variety: have diff availability of keys
- text index
	- not just by words
	- understands the text and can search in more meaningful way
	- can work w/ different languages
- hashed index for point queries
### Slide 18 - Additional Index Features
- sparse index: don't keep track of records that don't have the index field
- dense index: keep records without as null in the tree - can still access, just at the end
- partial index: only on subset of records
	- on restaurants with rating greater than $x$ 
