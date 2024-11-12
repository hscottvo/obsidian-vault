> Microkernel by nature has a high performance penalty

## Conventional knowledge
- flexible and abstracted
- many border crossing overhead -> performance hit
- L4 microkernel says: it's implementation fault, not due to microkernel
	- people don't like microkernel because Mach (microkernel) was terribly designed
## The Paper
- Claim: Microkernel should be _small_
	- shouldn't be designed with portability in mind 
	- still need basic features: VM, IPC etc

### Perofmance Issues with Microkernel
- lot more border crossing than needed
- System calls should not be expensive - Mach 90% of system call time is overhead
- Address space switch is really expensive
	- have to flush cache every time
- L3: L1 cache virtually indexed
- L2 and L3 physically indexed
	- don't always need to flush out the large indices
- Back then at least: lots more cache misses in microkernel
	- conflict miss: due to structure of the code rather than amt of data
- Too much code im Mach -> lots of capacity misses
	- people say a l ot of unncessary code checkings etc
		- can improve by minimizing microkernel design and specify for hardware
		- think of microkernel as microcode
	- smaller -> negative effect of cache misses can be reduced
## Conclusions
- authors were successful in minimizing overhead issues
	- Mach was trying to be portable -> not fine-tuned enough for performance
	- microkernel should employ all the hardware details
- 