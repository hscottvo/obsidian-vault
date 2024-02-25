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