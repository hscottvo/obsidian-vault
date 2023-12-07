14. object model: point, line, polygon etc
	- example of operation that does NOT change: directional
		- NY always east of Chicago
	- operation that DOES change:
		- metric operations (distance, areas, etc)
1. point, line, polygon are main ones
	1. can have multi- etc
2. close in 2d space should be close in 1d as possible 
3. edges are specifically related to spatial features
	1. can use spatial index to accelerate
4. useful & non-trivial
	1. trivial is: if riverside is cold, san bernardino is probably cold
 29. just mention which algorithm/structure you use, don't need to explain algorithm unless specifically stated

### GeoAI vs Spatial Data Mining
- objective is different
- main distinction: data mining for finding latent pattersn
	- pretty wide

### R-tree vs Quad Tree
- r-tree is balanced, quat-tree not
	- r-tree data partitioning
	- quad is space-partitioning
- r-tree changes where the boundaries are, quad-tree changes how deep to go for the partitioning
- quad-tree 2d, oct etc for higher dec
- r-tree any dimensions
- both have severe performance issues: sparsity

### Spatial Index
- data structure for fast lookups, built on spatial features

### Project Discussion
- don't need to prepare presentation for Wed
- Sat: print out 4-5 slides(?)