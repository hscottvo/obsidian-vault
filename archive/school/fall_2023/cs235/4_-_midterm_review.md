## Frequent Item Sets
#frequent_item_set
- many rules can exist over a dataset
- association rule: if set has these items, then it is likely to have this other item
	- set $\rightarrow$ item
- want to find relevant rules
	- support and confidence need to be past a certain threshold
### Equations
$support(A \rightarrow B) = P(A \cup B)$
- proportion of sets that include both A and B
$confidence(A\rightarrow B) = P(B|A)$

#### Examples
$B_1 = \{m, c, b\}$ 
$B_2 = \{m, p, j\}$
$B_3 = \{m, c, b, n\}$ 
$B_4 = \{c, j\}$
$B_5 = \{m, p, b\}$ 
$B_6 = \{m, c, b, j\}$
$B_7 = \{c, b, j\}$ 
$B_8 = \{b,c\}$

Given the following frequent item sets: 
{b,m} {b,c} {c,m} {c,j} {m, c, b}

$b \rightarrow m$ 
- support: 4 (4 instances of {b, m}) 
- confidence: 4/6 (4 instances of {b, m}, 6 instances of {b})
$b \rightarrow c$
- support: 5
- confidence: 5/6
$c \rightarrow m$
- support: 3
- confidence: 3/6
