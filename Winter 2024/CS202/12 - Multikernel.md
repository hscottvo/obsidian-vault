## Traditional OSs
- monolithic & microkernel
### Problems
- scalability: traditional has shared mem space for the kernel
	- all mem values in kernel shared among all CPUs
	- prevent race conditions, have to use lock, or RCU
	- cache coherence expensive
- multikernel: basically make distributed system version of the os
## Multikernel Model
- OS instance on each core
	- has to have communication to make sure hardware access is safe
- use _message passing_ to pass info between CPU cores
	- message passing is sort of already in microkernel (OS services talking to each other)
- split-phase: on write, don't wait for write to finish. Just send out message and move on. Similar to distributed systems