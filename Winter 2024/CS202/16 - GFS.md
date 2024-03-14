2003 - internet became rly popular, have pc, use web browsers
## Motivation
- scalable system using cheap devices
- lots of replicas -> can get reliable service still 

## Basic Design
- Metadata stored on name node (master)
- data stored on data nodes (chunk servers)
- GFS runs as user-level
	- provide api's to other applications
	- think of as a runtme library
		- doesn't need to follow any POSIX api's: not for general purpose

## Architecture
- clients can only see the metadata from master server, data from chunk servers
- only 1 master server by default
- don't cache metadata in client nor chunk servers: most data access is streaming. don't need same data twice usually
## Namespace
- no directory data structure, aliases
- _namespace_: within a specific namespace, everything has a unique string. Can use that string to reference the object
	- can still use directory names, just include in object name
- no multi-lookups
## Relaxed Consistency Model
- mutations (to metadata) has to go through master node
	- single master node: consistency

## Leases & Mutation Order
- subsequent writes: have to be to the primary chunkserver
	- allows for the sequential
## Atomic Record Appends
- traditional: locks to prevent race conditions for writes
- GFS: follow "lease" operation
	- write requests end up being sequential(what about reading then write? can't reading still be stale)
- have to see if write floods into the next chunk
	- if a write would have flooded:
		- pad the rest of the empty space in the old chunk
		- write the new info to the new chunk
## Master Replication
- while master is down, use _shadow master_
	- read-only access: when master comes back, shadow master has to maintain & synchronize with master if any writes
## Conclusions
- metadata etc between client and master
	- data stored only in chunk servers
- user-space issues probably not big enough relative to the size of data they handle