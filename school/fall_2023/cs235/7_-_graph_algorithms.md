## Basic Definitions & Concepts
- definition: set of nodes & edges
	- www
	- social/info networks
	- knowledge (how info has been shared)
- adjacency matrix inefficient for sparse
	- edge list instead
- bipartite graph
	- 2 sides don't have edges between each other
	- just edges between sides
- *clique* - set of nodes where all nodes connected to all other nodes
	- triangle - 3-size clique
- *diameter* - maximum of the shortest path between each pair of nodes

## PageRank and Centrality
- *central node* is very well-connected to other nodes
- useful in web search - can spam simple frequency-based functions
- *PageRank* in Google Search determines the importance of a webpage
	- look at incoming link as an endorsement
	- more incoming links likely to have more importance
	- links coming from important pages have more importance

### How to Deal with Dead Ends
- Adjust the graph - remove nodes that get you into a dead end
	- unrealistic - way too tedious
- spider tracks - small cycles
	- importance gets put completely in cycle nodes 

#### PageRank with Taxation
- at every step, the random surfer has a small probability of jumping to a random page

## Clustering
- community detection
- why not just use *kmeans* or other traditional clustering?
	- doesn't look at the structure between nodes
	- doesn't maintain relationships

### Method 1 - Strength of Weak Ties
- *edge betweenness* - number of shortest paths passing over an edge
	-	higher scores are candidates for splitting 
	- use *BFS* to get scores
#### Girvan-Newman Algorithm
- algorithm to get clustering: *Girvan-Newman Algorithm*
	- cut out highest edge-betweenness score edges until satisfied
### Graph Partitioning
- look at size of clusters as well
