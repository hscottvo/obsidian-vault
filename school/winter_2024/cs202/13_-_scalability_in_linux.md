## Highlights
- most kernel bottlenecks can be fixed using standard parallelizing techniques
- most of the solutions in the paper are standard or inspired by standard

## MOSBENCH Applications
- divided into 2 types
	1. things that don't really scale well on Linux
	2. things designed for parallel execution and are 

## Easy and Hard Fixes
- some scalability issues hard or easy to fix in the kernel
- strengths of paper: not developing techniques, but using them on real user-focused OS instead of research-oriented os
## Multicore Packet Processing
- found that whenever netwrok of the OS is handling a packet, that single packet may b ehandled by any of jmultiple CPU cores
	- obviously bad for performance: overhead from moving stuff around
- need to use locks if shared queue -> slower
- the card that they tested had multiple hardware queues
- important: they somehow made each resource private to each CPU core
	- certain packets go to specific queues, mroe consistently than randomly
## Reference Counting
- _reference counting_: counts how many entities are using a resource
	- suppose you create a memory object, and you are doing a multithread operation
	- possible that multiple threads use this data. At some point you want to deallocate when no one is using it. To do this, have to keep track of how many using it
- widely used in kernel
	- see if kernel can free object 
	- pretty much garbage collector
- keep track of ref counter: inc/decrement a value
- multi? can use locks
	- more sophisticated: use atomics (pretty easy since only ++ or --)
### Sloppy Counters
- ref counts important but not exact value needed
	- can prioritize portion of counter value for each cpu core(?)
	- only need to know if > 0 
- solution: private version of counter value (portion of the global)
## Lock-Free Comparison
- no idea lol
- 
## Per-core Data Structures
- which parts of data structures can actually be replace in kernel
### Eliminating false sharing
- many cpu cores, each have a cache. whenever they access data, they cache it then access it through its own cache
- cachelines 32-64bytes
	- within each line: can be multiple data entries
- struct in slide 26
	- can be fetched all together in a single cache line
	- let x be heavily modified, y be mostly read
	- used by many cpu's
	- even if read y most of the time, need to reread from memory since X was updated a lot
- solution: place heavily modified data on separate cache lines. but how?
	- can just add padding 