## Critiques
### Pros
- goals & techniques very clear
- system overview gives examples of the safe modularity and the user applications they talk about 
- clearly talk about road map of the paper
- related works show what good & bad things exist, and list some similar papers
- good showcase of extensibility, since that is one of the main things about the paper
### Cons
- list of techniques not in similar order to the goals in the prev paragraph (1.1)
- service size tables in raw bytes, hard to read but probably the norm back then
## 0 - Abstract
- extensible
	- provides infrastructure
- safely customize interface, implementation
- main idea: safely change the OS
## 1 - Introduction
- rationale: performance based on use case
### Goals & Approach
- _extensibility_ relies on interfaces
	- extensions can respond to events
	- use namespaces to separate code modules
- _safety_ = exposure, control
	- use programming language that enforces interfaces
- _performance_ = low overhead between extension & OS
	- extensions stored _co-locally_ to be faster
## 2 - Motivation
- current state: OS has to balance between customization and performance
- high effort to add customizations to system behavior
- some big OS (MS-DOS, Windows, MacOS) not protected, user applications access things they shouldn't
### Related Work
- conflict between extensibility, safety, performance
- some use _microkernel_ to allow restricted access to some functionality, but limited usability, and slow
- extensibility currently annoying - custom languages, bad interfacing
- easy extensibility so far was unsafe
## 3 - The SPIN Architecture
- use language-level services instead of directly on the hardware
- language: _Modula-3_ 
	- SPIN only uses safety & encapsulation features
### 3.1 - The Protection Model
- process can only access memory that it should access 
	- some defined in hardware but SPIN in software, with pointers
- compiler type safety with pointers
- keep track of what variables available in each context
- protection at language level -> have to manage namespaces at language level
	- namespace management allows same variables/names without overlapping functionality
- extension compiler can deem a file to be safe, so kernel doesn't freak out
### 3.2 - The Extension Model
- extensions can look at low-level info if needed
	- eg. system monitor
- extensions defined by events & handlers
	- event: change in system state or request for service
	- handler: receives the message and act on it
		- handlers can talk to each other
## 4 - Core Services
### 4.1 - Extensible Memory Management
- gives low level control to phys/virtual memory
- address space not directly from the core services
### 4.2 - Extensible Thread Management
- high level thread management system can be too slow
- low level exist, but correctness can be inconsistent
- SPIN allows user to define thread scheduler
- user-defined thread needs to go to kernel mode: kernel makes its own thread and does what it needs to do
- scheduler can be overwritten
	- base is round-robin
### 4.3 Implications for Trusted Services
_trusted_ services must follow interface spec
- required on services that do things not allowed by the protection model
## 5 - System Performance
- size, microbenchmarks, networking, end-to-end performance
### 5.1 - System Components
- most of the space is from the _sal_ component which is used for device drivers & MMU
### 5.2 - Microbenchmarks
- compare context switch speed: much faster than DEC OSF/1, little faster than Mach
## 6 - Experiences with Modula-3
- unrealistic to use C programming language
- modula-3 performance was fine, not as bad as they thought it would compare to C
- easier to code in
## 7 - Conclusions
- can get fast, extensible, and safe OS
- 