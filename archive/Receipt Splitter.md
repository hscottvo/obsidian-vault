---
tags:
  - project/receipt_splitter
---
- 2 repos frontend backend
	- stephen ai probably same repo as backend? tba
- mongodb database (for now)
	- easier to change schemas
- react (native) frontend

## Git
- 1 branch for eacdh merge into main
	- branch delete after merge
- rebases before it merges
	- we shoudl see if squash is automatic
	- all embedded commit should be committizen
- kanban card 1 per merge request

## TODOS
- code approvers
- committizen
- pre-hooks
### Pipeline
- pipeline runs every push
1. code owners: for each file or folder, choose owner
2. unit tests (includes bundle js)
	1. gets run every time someone pushes
3. integration tests
4. pings approvers based on who owns it
5. deploy


## Dev Environment Setup
- install committizen

