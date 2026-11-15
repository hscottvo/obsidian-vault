- [[#Clustering|Clustering]]
	- [[#Clustering#What is Good Clustering?|What is Good Clustering?]]
	- [[#Clustering#Considerations|Considerations]]
		- [[#Considerations#Partitioning Criteria|Partitioning Criteria]]
		- [[#Considerations#Separation of Clusters|Separation of Clusters]]
		- [[#Considerations#Similarity Measure|Similarity Measure]]
		- [[#Considerations#Clustering Space|Clustering Space]]
		- [[#Considerations#Hard Vs Soft Clustering|Hard Vs Soft Clustering]]
	- [[#Clustering#Common Approaches|Common Approaches]]
		- [[#Common Approaches#Partitioning|Partitioning]]
		- [[#Common Approaches#Distance Metrics|Distance Metrics]]
		- [[#Common Approaches#Algorithms|Algorithms]]
			- [[#Algorithms#K-Means|K-Means]]
				- [[#K-Means#Loss Function|Loss Function]]
				- [[#K-Means#Furthest Point Heuristic|Furthest Point Heuristic]]
			- [[#Algorithms#K-means++|K-means++]]
		- [[#Common Approaches#Hierarchical|Hierarchical]]
		- [[#Common Approaches#Density|Density]]

## Clustering
- cluster analysis is most popular
### What is Good Clustering?
- cluster metrics: `intra-class similarity`
	- high -> cohesive within
	- low -> distinctive between
	- maximize distance between clusters, minimize within
### Considerations
#### Partitioning Criteria
- flat vs hierarchical
#### Separation of Clusters
#### Similarity Measure
- can use euclidian distance, cosine similarity
#### Clustering Space
- what dimension you cluster in
#### Hard Vs Soft Clustering
- soft: object can belong to 1 or more clusters
	- example: categories of item: sports apparel & shoes
	- latent dirichlet allocation (LDA) cluster words for topics
### Common Approaches
#### Partitioning
- think k-means
	- every point is a part of only 1 cluster
 - for each cluster, compute distance between point $p$ and cluster center $c_i$
	 - minimize errors $p - c_i$ across all clusters
- optimal solution is NP-hard
- K-means uses center of cluster
- K-medoids uses one of the points in the cluster instead
#### Distance Metrics
- document similarity: cosine similarity
	- 1 feature per word
	- can't use euclidian: document length ends up playing a factor
	- cosine: normalize vectors & look at similarity in angles
		- standard word vector similarity method
- nice spatial data: euclidian distance
#### Algorithms
##### K-Means
- pick $k$ random points to start cluster
- for every point, compute distance to each existing cluster center
	- after all points, recompute cluster centers: $\mu_{cluster}$ 
 - simple to understand & implement, pretty efficient, can finish at local optimum
 - how does it work with categorical data?
	 - what does "mean" mean
- have to experiment with $k$ value, can't solve for optimal
- how to deal with outliers?
###### Loss Function
- sum of squared distances from points to their cluster center
- every iteration decreases loss - oscillate back and forth
	- can still find local minima, might want to run k-means multiple times

- can seed the cluster centers
- can do multiple or combine convergence metrics
	- threshold of iterations
	- if partitions don't change anymore
###### Furthest Point Heuristic
- random 1st centroid
	- subsequent centroids: furthest away from the existing centroids
- issue: outliers
##### K-means++
- use diff heuristic
1. choose random point for 1st cluster centroid
2. choose point with smallest distance to any center(?)
- helps against outliers
	- look at distance to closest center, rather than further from existing centers
#### Hierarchical
- recursive clustering
	- very end: prune based on needs for cluster size
 - do not require pre-determining the number of clusters
 - dendrogram: split until 1 point per leaf
	 - can get cluster by pruning at certain level
	- depends on needs
##### Agglomerative Nesting: Agnes
- bottom-up: start with each data point as own cluster
	- combine clusters that are similar
##### Divisive Analysis: Diana
- top-down: start everything in same cluster
	- split clusters until threshold
- VERY expensive if try to enumerate all splits
- use a heuristic or greedy to get clustering 
#### Density
- DBSCAN
### Density-based Clustering Methods
- k-means etc deals with spherical clusters
	- can't handle complex shapes/nesting
	- very sensitive to outliers
#### DBSCAN
- look at the density of points in a region, form the clusters in that fashion
1. look at each point -> draw circle around it, look at how many points it overlaps
	- that is the density
	- can have diff metrics to count what is inside vs what is outside
	- size of circle is one of the parameters
2. minimum `support` threshold for a point to be a core point
	- throw out points that are not core points
	- decided by practitioner
3. after defining core points, choose a random core point
	- surrounding core points within the overlapping circle gets added to the cluster
	- only core points are added to this stage
4. add non-core points that are close to core points to the cluster of the core point
	- the non-core point's nearest neighbor must be a core point 
		- probably stops too much propagation 
- don't choose number of clusters ahead of time
- end up with outliers being unclustered
- `density-reachable` - can be assigned to a cluster within a certain number of propagations
	- asymmetric
- `density connected` - 2 points are both density-reachable from a single point
	- symmetric
- efficiency - can use `R* Tree` to index nearby points better
- deterministic? 
	- Depending on ordering, border points might end up in different clusters
		- can happen if clusters are very close to each other
	- most of the cluster will be the same