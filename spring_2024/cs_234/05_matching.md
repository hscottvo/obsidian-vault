- can apply to any type of text
## Application
- sequence DNA very often
- read-sequencing: can get the reads, map against reference -> able to find where the snips are and thus variations (every 200-300 symbols)
## String Matching
- more mapping than matching
### Short Read Alignment
- want to know where the string matches, not just 1 locatoin
- GATCAT vs GATCAA is closer than GATCAT vs GAGAAT
- low quality mismatches penalized less than high quality mismatch

### Approximate/Exact String Matching
- Hamming distance: how many substitutions
- "What is the smallest length that the longest matching section can be, given 1"
	- $\frac{1}{2}$ of the string
- $\frac{m}{d+1}$ length matching section
	- m is length of sequence, d is number of differences
- if split into 2 matching sections, need to make sure that they happen in sequence
- can look for snippets that have distance $d$ 
- want $m \approx 100-1000$ 
- Can just do exact string matching methods for anything, until $d$ gets large
- generates candidates to check

## Notation
- Strings indexed from 1
- $n$ is the size of the genome
- $m$ is the size of the query
## Naive String Matching
- for every starting point $i$ in $x$, see if $y$ matches the substring $x[i: i+|y|-1]$
- time complexity: $O(nm)$
## Z-Algorithm
- $Z_i(y)$ is the length of longest substring that starts at $i$ that matches prefix of $y$

## Knuth-Morris-Pratt
- the else statement in the algorithm: shift even if we find a full match for y - this is because we want to find every matching instance of y
- spm is the end of the suffix, z is the beginning of the usffix
- preprocc: for all the z-boxes that end at i, get the earliest place that starts at j -> if there is at least 1 z-box, then spm_i is the Z of 

## Indexing
- memory consumption becomes the most important
### Hashing $k$-mers
- k-length window: hash $x^k$-size hash table, $x$ is num of unique symbols
- seed & extend: seed is the k-mer, extend is the match

## Suffix Trie

## Time Complexities
- naive: $O(nm)$
- Z-algorithm or KMP: $O(n+m)$
- suffix trees, …: $O(m)$
	- lower bound (have to look at every symbol in the pattern at least once)