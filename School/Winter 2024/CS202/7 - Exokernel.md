## Why secure bindings?
- can't trust LibOS
- _bind_ - 2 phases: authorizaiton and check availability
### How to implement?
- if hardware gives support, obviously can use
	- access-time check etc: can just rely on MMU
- software caching: can handle things in software
### Download application code
#### Application-Specific Safe Handlers
- _ASHs_ - allow libos to specify handler code to happen in kernel space
	- eg. multiplex the network can involve border crossing
		- download portion of LibOS code to kernel, and check validity
#### Performance
- Handlers(?) can happen even if application not scheduled
	- how? handler code is downloaded into the kernel, so the kernel itself runs the handler code
		- no need for scheduler - in the kernel
#### Safety
- modula 3 type-safe
- code must be verified to be trusted
## Visible Resource Revocation
- kick out memory: trad. doesn't tell
- Exokernel: let LibOS see revocations
	- can react to deallocation
		- choose which pages to kill
	- why need? LibOS has the authority to determine what to do with its resources
	 - can be less efficient if revocations happen a lot
		 - more overhead since passing more info around
	- All this works best if LibOS is cooperating
### Abort Protocol 
- If LibOS doesn't cooperate and agree to revoke, exokernel _force resource revocation_
	- basically what abort protocol means
- _repossession vector_ - even if exokernel takes forcibly, cache it(?)
- possible relocation depending on state of resource
	- what if exokernel wants to deallocate portion that was used for critical performance for the LibOS? LibOS get in trouble
	 - Idea: have LibOS choose pages to be permanent
## Managing CPU
- Similar to what SPIN os does
	- end result: 2-level hierarchical scheduing behavior
	- time-slice vec allocated to LibOS
		- exokernel gives specific timeslot for LibOS
## Conclusion
- Most of the time, LibOS runs instead of exokernel
	- exokernel doesn't need to do much (hopefully)
- exokernel runs application-specific handlers, hand to applications when triggered
	- handlers can run in kernel since downloaded - can happen any time
 - Why don't people use exokernels today?
	 - basically just too hard
	 - can do anything you want in the form of LibOS, but how many of us can use/need that?

### Vs. SPIN
- basicaly teh same, only different when the events happen
- SPIN: event handling always done in kernel space w/ extensions
- Exokernel: most handlers run in the user space except when downloaded into kernel space

## Discussion
### Microkernel VS Exokernel
- both want to make kernel smaller
- scheduler/memory management can be implemented in user space in both
- Microkernel: focus on inter-process communication
	- scheduler in user space to make kernel small
	- share stuff between processes
	 - processes communicate a lot. Bottleneck is IPCs
- Exokernel:
	- main: extensibility
	- have each application have its own policy/allocated resources
	- IPC may not happen a lit - Each appliaction/libos is its own process
		- everything served by LibOS -> don't need as much communication between LibOSs

## Questions
- T/F: SPIN user-space programs can directly use pointers to access kernel resources
	- _False_ - not pointers
- T/F: SPIN is a microkernel
	- _False_ - a little debateable (Kim)
	- huge departure from monlithic
 - T/F: Exokernel is a Microkernel
	 - not monolithic, has multiple LibOS
- T/F: Exokernel: ASH download in user kernel can't execute when corresponding application process is scheduled