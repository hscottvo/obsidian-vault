## Announcements
- some calculations
- kim will provide sample questions
	- from previous exams

## CPU-bound Vs I/O-bound
- no clear cut between the 2 categories
	- all process have some cpu-intensive and some i/o intensive portions
## CPU Scheduling
- Important problem when multiprogramming was introduced
	- hardware more complex & more cpu resources allocated
- scheduling is basically resource allocation
- Mechanisms & Policy
	- Mechanisms: toolbox, whether you can switch from process to another
	- Policy: How to control the toolbox
	- Designing new resource management scheme, good to think of the 2 differently
		- even if change policy, can use same mechanisms

## Preemptive Vs Non-Preemtive
- preemptive: involuntary
	- can interrupt running job
- non- 
	- wait for process to give up resources
	- also called _cooperative scheduling_
 - most is preemptive nowadays
	 - non for webserverse, application-level scheduling
	 - server: forevenet handlers
	 - Less overhead than preemptive
		 - context switch only happens at "good" times

## Xv6 Scheduling
- no actual run queue, just loop through processes
## Scheduling Goals
- depends on application of system
	- non-interactive: throughput > response time
## Common Scheduling Problems
- some tasks dominate resource -> others cannot do anything
	- usually when priority. if high priority hogs cpu
- priority inversion
	- if resources avail and high-prio ready to run, shoudl be able to do high prio
	- if low-prio tasks are blocking, then can hog the cpu and make it so the priority system isn't true anymore
- deadlock, livelock
### Deadlock
- everyone partway through, can't give up
### Livelock
- resource available
	- everyone waiting for each other -> no one does anything
## Performance Metrics
#scheduling_metric $turnaround\_time = completion\_time - arrival\_time$

## Standard Scheduling Policies
### FCFS / FIFO
- usually non-preemptive
- _convoy effect_ - if shorter processes end up going earlier, then they end up having better turnaround time
	- long-running process can impede shorter processes
	- think grocery store: person with full cart in front of you in line
	- in computing: I/O-bound processes after CPU-bound process
- also called _head-of-line blocking_ problem

### SJF - Shortest Job First
- non-preemptive
- Assume that scheduler knows how much CPU time it will use
#### Predicting CPU Burst Length
- can never be perfect
	- try doing profiling at compile- or runtime
#### Arrival Time?
- long process can be scheduled before shorter processes even arrive
	- can end up being FCFS
	- head-of-line blocking
### Preemptive SJF (PSJF)
- also called _shortest time-to-completion first (STCF)_
- don't have to wait for the longer job to complete
### Round Robin (RR)
- focuses more on fairness but also good for overall response time
	- minimize waiting time for processes to start
- duration of time slice usually 1-100ms
- worst case turnaround: FIFO-like behavior
- context-switch overhead dictates lower bound for time slice size
	- usually $\frac{1}{N}$ of the time per process
### Priority Scheduler
- Some systems use 1 as highest priority, some 1 as lowest priority
- slides: smaller is higher
- have to worry about _starvation_
	- high priority task runs for 1 hour -> high priority tasks will not release CPU until it completes
	- solution: dynamic priority
		- increase priority based on waiting time length
### Earliest Deadline First (EDF)
- only useful if deadlines actually assigned
	- real-time systems already assign deadlines
### Combining Algorithms
- _MLFQ_ multi-level feedback queue
	- basically try to do everything well
	 - hard to do everything well
	 - generally does pretty okay at all of them

## Interactive Systems
- response-time is important
- most of our systems today
- #scheduling_metric $response\_time = first\_run\_time - arrival\_time$
	- other cases just = turnaround time
### Response Vs Turnaround
- how long from arrival to start vs how long from arrival to finish respectively
- Sometimes completion of work may matter more. turnaround time more important
	- think neural nets. 

## MLFQ
- multiple ready queues, each w/ different priority
	- round-robin within each queue except for last queue FCFS
- lower RR time slices on higher-priority
	- high prio: want process as fast as possible, at the cost of context switch
	- low prio: don't need things to happen right away -> can be more efficient with higher time slice -> less context switch overhead
- task uses up entire time slice -> the task is probably more CPU-bound
	- move to lower priority, so less context switch
- better to prioritize i/o bound
### Unix Scheduler
- introduced MLFQ - wanted to minimize response time

## Fair Share Schedulers
- lottery, stride

## Real-time Scheduling
- outside of class scope
- hard and soft- real-time syste
### Hard
- deadlines ALWAYS have to be met
### Soft
- some deadlines okay to miss

## Multicore Systems
_Symmetric Multiprocessing (SMP)_
- each processor might have multiple CPU cores in it
- memory connected through bus
- multi CPU's can mess things up with caches
	- L1 cache in CPU 1 updated -> value in mem is stale for CPU 2 to read
## Hyperthreading
- for each physical CPU core, give 2 logical CPU core to the operating system
- wait for mem on 1st logical core -> can compute on 2nd logical core
- 2 contexts exist at the same time (double the registers)
- 2 physical cpus -> OS sees 4 logical cores but thinks just 4 reg cores
	- load job to logical 1 and 2 -> physical 1 takes all the work

## Multiprocessor Scheduling
### Global Scheduling
- _single-queue multiprocessing scheduling_
- not as much worry about idle processors
- more overhead to stop race conditions
### Partitioned Scheduling
- for each CPU core, have a run queue
- hard to load balance
- whenever each processor becomes idle, scheduler on this processor has to look at another's ready queue
- queues are private -> don't need to worry about race conditions
- task usually fully run on the same processor -> better locality in terms of cache
#### Process Migration
_push migration_
- when 1 cpu is full, then __push__ the process to another queue  
_pull migration_
- when 1 cpu is empty, then __pull__ a process from another queue

## Linux Scheduling
- 2 hierarchical scheduling classes
### Multiprocessor Scheduling
- Partitioned scheduling 
### Time-Sharing Class
- default
- launch terminal, run `ls`
- work-stealing used for load balancing
### Real-time Class
- designed for real-time applications
- fixed priority
	- newer versions have dynamic priority scheduling
- _completely fair-share_ (CFS) scheduler
	- not actually, really _approximate_
 - each have its own ready queue, but behaves like global scheduling

## Scheduler Comparison
- currently 2 #scheduling_metric 
### Algorithm Evaluation
_deterministic modeling_
- get equations -> mins and max for turnarond time etc  
_queueing models_
- What is the different cases of arrive rate etc for response time  
_simulation analysis_

