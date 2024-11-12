- still certain applications that need to modify big data
	- how to deal with hdfs since it only allows 1 file write at once?
- spark reads whole file - basically full scan any time
- Hard to use traditional indexes on big data
	- existing can't scale - designed for in-memory or at most single disk
	- rely on random reads & writes, not supported in HDFS
## Clustered & Unclustered Indexes
### Clustered
- records match the order of the index
- good for both point & range
- only 1 exists per dataset
	- usually for the primary key
### Unclustered
- not ordered in disk
- good for subsequent indexes
	- rely heavily on random access
- much less useful in HDFS
	- file is distributed: if you do a range scan, you'll end up reading a bunch (all?) of scans on entire blocks
	- good for finding 1 or 2 records
	- range: might be even worse than doing it non-distributed
## Distributed Indexes
- 2 levels of indexing
- when partitioning files, use some partition function that uses the index key
	- global index is just partition smartly with blocks
	- local is traditional within block
- dynamic partitions: have to know upfront how many partitions - otherwise have to repartition on edit
### Hash Partition
- only need 1 scan to partition
- easily flexible - just change the mod part of the hash function
- good load balance with good hash function
	- also good to have low skewness
- only supports point queries - bad at range queries
	- "all keys that start with M" doesn't work
### Range Partition
- usually range index is dynamic - not feasible to do on distributed
- common solution: LSM-tree
## Log-structured Merge Tree
### Traditional DBMS
- add to index & log at the same time
	- appending to the log is faster than to tree
### LSM Tree
- use the log as the index
- don't worry about the actual index - just the log
- new records always appended - faster 
- reading less efficient
- once you close part of a log, open a new file for log
	- old is never touched again
	- once old is saved, build index on saved logs
- occasionally compact multiple logs together to something that looks a little closer to a regular b tree
	- can insert data much more efficiently
- search less common than writes
	- social media 
	- IoT devices writing data
- within the logs, can be as simple as sorting, or can build an actual b+ tree
### Types of LSM
- Stack-based & level-based
#### Stack
- stored in linear order by creation time
- very good when records inserted in sorted or nearly sorted order
	- why would this be useful? 
		- very common to store things ordered by timestamps
		- auto-generated keys that are serial
	- not necessarily perfectly ordered
		- network delays 
		- not going to have things like 5 years apart
- Writing new record: just write to memory (and log)
- upon log write, organize it how you want and write it
	- still compact periodically
##### Deletion
- Set a flag in the log in memory
	- look back in time the log until flag found, then you stop or you finish and return
	- have to store history, but end up being fine - easy feature to add history view
- concurrency issues? 
	- version might be delayed, but at least it's consistent
#### Level
- main distinction from stack: how stored on disk
- once mem component fills up, write to first level
- all levels past first: disjoint on the search key
- take level 0, merge and push down to lower levels: repartition for the next level
- Example
	- level 0: have 2 partitions 15 to 20
	- level 1: hve 2 partitions 10-17 and 17-25
	- push down: level 1 now has 4 partitions partitioned 10-25
- How to search data?
	- within level: order by key
	- across level: order by insertion time 
		- older records are deeper
	- Start with memory component: find what you want? latest version
	- 1st level have to search all the components
	- anything past 1st level (level 0) just have to search in search range for each level
	- point search faster. range search have to look through whole hting no matter what
		- point search can stop after finding 1st
##### Garbage Collection
- collect any data that is not useful anymore
- replaced components that are not part of the tree anymore? Sent for garbage collection
	- have to send to gc instead of delete because there could be a process that's still working on them
	- once all the queries that are working on those are done, can delete
- new versions: when compact versions and find 2 versions of the same record -> take newer version
## Local Indexing of Components
- can be constructed in memory before writing
