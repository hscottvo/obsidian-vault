_definition_ - run multiple OS 

- hosted architrecture: have a underlying OS, run hypervisor on top
## IBM VM/370 CPU Virtuializiton
- to virtualize CPU: virt. environment 
- recall: OS needs to run in kernel mode
	- some instructions only possible in privileged mode
- Hypervisor obv has to be in kernel mode
- how about guest OS?
	- no - if in kernel: guest OS dying kills the hypervisor too
	- Solution? Run guest OS in user mode, privileged instructions raise a trap/exception
		- doesn't actually disable interrupts for example. But it is emulated
### Trap-and-Emulate Example
- left side: only 2 border crossings: go in, then out
- right side: user syscall trap into hypervisor. Hypervisor emulates, gives control to guest OS
	- when in "kernel mode", can switch between guest OS and hypervisor a lot
## Virtualization on x86 Architecture
- Challenge: Some privileged instructions traps are silently skipped
- Some instructions happen differently in kernel vs user mode
	- ex popf
- guest OS in user mode: 2 problems above
	- hypervisor not able to virtualize correctly
- x86 doesn't have software-controlled TLB
## Solutions 
#### Dynamic Binary Translation
- there are certain privileged instructions in the kernel code. Can't we just rewrite it? 
	- Problem: would have to run guest OS
	- Solution: Do the binary translation at runtime
	- only need to change privileged instructions, not entire code
- Pros: make x86 virtualizable
- 
## Memory Virtualization
- 2 levels of page tables
	- guest phys memory is stored in hypervisor virtaual memory
- mmu: only knows starting address of top-level page table
	- can't keep track of 2 page tables, can't natively deal with guest memory
### Shadow Paging
- Directly bypasses 2 separate page tables, just make the hypervisors construct a page table to translate guest VA to hypervisor PA
- hypervisor HAS to keep monitoring shadow page table
	- guest os modifies page table -> hv has to update shadow page table

## Xen Hypervisor
- don't have to modify application code. Instead, modify the guest OS such that the OS in the vm  knows about the virtualized environment
- dom0 used to have most of the drivers, lets us make HV smaller
- running in guest OS running in ring 1 doesn't really have any benefit over regular user mode
	- might have some management benefits, can check if something is running as a part of the GuestOS
- dark gray: Dom0 special domain for Xen
	- all the device drivers
	- still running in Ring 1 despite having the device driver code
- _hypercall_ similar to syscalls
	- _syscall_ interface between user and kernel
	- hypercall is a downcall between GuestOS and HV
	- Modified syscalls in guestos lets you directly make syscalls to HV without extra border crossing?
- _interrupt_ handled by lightweight event system
- _time_ has interfaces for both real and virtual time
	- real: just get from HV
### Memory Virtualization
- doesn't use shadow paging anymoire
	- xen just allows GuestOS to view the page table and directly map guest user level operations to physical memory
	- GuestOS has read-only access
		- Decisiion-making done by GuestOS, then user hypercalls to do the 
	- Whenever guestos wants to modify page table, send hypercall. 
		- similar to exokernel: allowed each LibOS to see the phys resource and make decision, but actual action handled by HV
## I/O Virtualization


VMCS: basically context of the VMM