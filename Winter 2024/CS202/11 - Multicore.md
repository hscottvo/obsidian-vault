## NUMA
_non-uniform memory access_
- for each cpu chip, there is some portion of memory adjacent to each part
- CPUs connected to each other through interconnect
- data in the memory close to CPU 3 but CPU 1 wants it
	- task would run a lot faster if it ran in CPU 3 instead
### Interconnects
- different between different versions & companies
- more and more complex
- can't make full connection: expensive
	- interconnects are wires
## Scalability
- how much performance improvement can we get by getting more cpu cores?
	- perfect scalable system: 1-to-1
	- can't happen due to other bottlenecks
- not everything is parallelizeable


0 is unlocked, 1 is locked
3 CPUs A, B, A, B, C

lock array is bool array 

[0, 0, 1, 0, 0]

right now: A has the lock
next_ticket = 0
