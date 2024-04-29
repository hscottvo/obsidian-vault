`spatial network` - just a network where all the nodes are data objects
- can think of it like a graph
- think of another data type of spatial, to add onto lines points etc
Why can't we just use several spatial lines instead of a network?
- lines by themselves don't show relationships between each other
	- neighbors etc
- most common & straightforward application: transportation system (google, apple maps)
	- basically showing road network
- connects concepts together
## Spatial Network Query Example
1. shortest path between starting point and destination
	- Google map to get to LAX
2. nearest hospital by driving distance
	- network distance might not be the same as Euclidean distance
	- have to do graph traversal

## Graph Model
- recall: spatial network corresponds to a graph
	- have nodes & edges
- any applications built on top of graphs can be used in spatial networks, vice versa
### Example: River Network
- nodes: rivers
- edges: river flows into another river
### Example: Road Network
- roads as edges, intersections as nodes
- can do vice versa: "edge between 2 roads if they intersect"
- which better in real life applications? `depends`
	- just whichever gives you better query performance
## Spatial Network vs Graphs
- each node in the network has **at least** lat and long (spatial features)
- can you have a spatial network, can do spatial things to it such as spatial index
## Data Models
1. conceptual
2. logical
3. physical
	- the actual algorithms that you are running on your schema

###  Physical Data Model
- most common way to store? adj matrix & adj list
	- stores neighbors of each node
- `adjacency matrix` - very space consuming: $O(n^2)$ space where $n$ is the number of nodes
	- usually very sparse - very rare to have edge between nodes that are far away
- `adjacency list` - for all the neighbors for each node, just store a list of its direct neighbors
	- size of storage equals exactly how many nodes there are in the graph
#### Store in Tables
- normalized & denormalized
- `normalized`: have 2 tables, 1 for nodes 1 for edge
	- node table has id & location
	- edge table has start & end, and distance
- `denormalized`: have 1 big table, but not normalized
	- can have more than 1 value in a single cell - not normalized
### File Structure
- can't store entire graph on one machine usually
- how do I partition the data to minimize disk I/O?
	1. geometric - riverside graph  & moval graph
	2. minimize the number of edges that span between partitions
## Query Processing
Most important:
1. Connectivity - Can I get from point A to B on road
2. Shortest Path - What is the shortest path from A to B?
### Connectivity
- bfs & dfs can be used - basically same thing as with traditional graphs
### Shortest Path
- most common: Dijkstra's & A*
	- both aim at finding shortest path between source and destination
- 