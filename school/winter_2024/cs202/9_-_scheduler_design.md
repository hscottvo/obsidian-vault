## Proportional Share
### Lottery Scheduling
- key idea: assign tickets to each process
	- run lottery to decide scheduling
	- winner gets the CPU
- more tickets -> probability of getting scheduled earlier is higher
- speed depends on the speed of the RNG
- no PQ, change order of process in the run queue - just run the lottery
#### Ticket Transfers
- dependency between processes -> can transfer ticket to what you are depending on, reduces response time
- similar to priority inheritance
#### Ticket Currency/Inflation
- suppose you are a process/application and you have multiple threads within your own process
- want to assign 1 of your threads with more CPU time
	- create more tickets and give it to that thread
- no communication between processes
- weights of each tickets different between processes
#### Compensation Tickets
- i/o likely to be starved because waiting
	- usually block before their turn is up -> don't get their full turn
- get compensation ticket
- used $\frac{1}{10}$ of the time slice -> ticket value will be inflated by factor of $10$ until next time it gets the CPU
##### Example
- CPU time 100ms
- client A releases CPU after 20ms
	- $f = \frac{20}{100} = 0.2$
- value of all tickets owned by A will be mult by $5$ until A gets the CPU again
- question: __client counts as either process or thread?__ 
#### Discussion
- fine control of ratios not good since probability-based
### Stride
- same ppl as lottery scheduler
- deterministic version of lottery scheduling
- long stride means has to wait longer time before execution again
- short stride means likely will be executed soon
- _stride_: wait time until next execution
	- $stride =\frac{K}{num\_tickets}$ 
- next selection time: _pass_
	- run -> `pass += stride` 
	- lowest _pass_ is selected to run next
	- can still use compensation etc
### Linux CFS
slide 38
- thread A has weight 1 thread b has weight 4: 4ms and 16ms 
	- time slice proportional to their weight
instead of dividing stuff, just grow with ratio according to the weight
## Threading Model
### User-level Vs Kernel-Level
### Something