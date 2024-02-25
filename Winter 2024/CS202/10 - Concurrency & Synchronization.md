- classical synchronization issues
- lock primitives
## Classic Example
- calculate new balance and rewrite to account
	- works fine in single thread
### Interleaved Schedules
- scheduler doesn't know rabout relationship between threads
- writes can be messed up
### Race Conditions
- multiple threads/processes in the system are racing to share/write data
### Mutual Exclusion
- _critical section_ is the part of code that requires mutual exclusion
- mutex: only 1 thread can enter that portion at a given time
	- complete: only 1 thread. Otherwise small # 
- requirements from a system point of view? 
	1. mutual exclusion
		- main thing. only 1 thread can run a critical section at a time
	2. progress
		- if nobody in the critical section, allow a thread to enter the critical section
		- basically no livelock?
	3. bounded waiting 
		- if resource is locked, waiting time should be bounded & no one should be left for starvation
#### Using Locks
- use acquire and release
- acquire while already locked? wait for release
#### Implementing Locks
- very difficult to implement
	- most OS has API for it
	- still good to understand how it works for efficiency
## Lock-based Synchronization
### Low-Level Primitives
- used to make high-level 
- spinlock, hardware atomic instructions, disabling interrupts
#### High-Level Synch Methods
#### Disabling Interrupts
- how does interleaved exec happen? events from OS happen to interrupt the process
- disable interrupt -> system continues to run without changing process
	- easily obtain mutex until re-enable interrupt
##### Limitations
- only available in the kernel space
	- once you launch these instructions, the whole system can't do interrupts
- not really usable in user program
- long critical section is bad
- only applies to single core in multicore
	- today's arch: no way to disable interrupts on all CPUs
### Instruction-Level Atomicity
- _test-and-set_ instruction
	- single instruction, but 2 functionalities combined
1. writes to a given memory location
2. returns old value of memory location
#### Spinlock
- mutex lock
- run test-and-set for lock->held field
- `lock` is shared between the threads
- generally better for short critical sections
#### Semaphore
- can specify how many threads can there be in critical section
	- iniitalized
- `wait`: get the lock
- `signal`: release the lock
### Deadlock
- hold & wait: if only 1 lock, no deadlock. If 2 or more locks, can have deadlock
- no preemption on the resource
	- preemptible resource can be interrupted/forced off. 
		- while a thread is using a resource in a critical section, can you give the lock to someone else?
	- usually not the case
- circular wait: basically livelock?
	- process a wants lock 1, holding lock 2. process b wants lock 2, holding lock 1
### Avoiding Deadlock
- some tricks
- _lock ranking_ - specify order of locks
	- all thread codes that access the lock follow the same sequence
- "require 2 locks, then make sure that you get A first then B"
## Read-Copy-Update
