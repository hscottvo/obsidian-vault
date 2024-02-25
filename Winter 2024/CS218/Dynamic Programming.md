- not an algorithm to memorize, instead an idea to make algorithms faster
	- memoization
## What is Dynamic Programming?
### Optimal Substructure
_state_
- what should we _memoize_? 
### Decisions
- whether or not to compute state, whether it is trivial
- possible _previous move_? 
	- what options there are
	- how to combine different substructures to get the best 
### Boundary
- Base casees
### Answer
- usually last element but not always
### Recurrence
- identify what the decisions are, how to deal with boundaries
- can do it mathematically once you write it down (exam/abstract level)


## Memoization
- saving previous work/computation
- _top-down_ - recursion call starting from endpoint
- _bottom-up_ - double loop
	- "classic" version of DP
	- harder to implement, easy to mess up
## Classic DP Problems

### Single-source Shortest Path on DAGs
- arbitrary graph: can use Dijkstra's
- DAGs simpler
- distance from start to $i$: shortest distance to $j$ plus distance to $j$ for every predecessor of $i$
	- $D[i] = \text{min}_{j\_is\_pred\_of\_i} (D[j] + dis[i, j])$
- looping through $i$: can't just do this, have to do it topologically
	- basically $D[j]$ may not have been computed yet
	- when you reach $j$, run compute on it
### Matrix Multiplication Chain
- last move: multiply 2 final matrices
- solve recursively
	- Cost of left mult + cost of right mult + cost of combine mult
	- $f[i, j] = min(f[i, k] + f[k+1, j], a[i] \cdot a[k+1] \cdot a[j+1])$
		- $i$ is left bound, $j$ is right bound


## DP on Games
- this is on midterm
### NIM
- pebble choosing game
- can take 1, 2, or 3 pebbles, take turns. Take last pebble wins