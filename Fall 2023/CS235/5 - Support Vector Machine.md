- many lines that can separate the positive and negative examples
- how to get best line? SVM
## Support Vectors
- weigh points closer to boundary more than far away
	- distance: project from point onto line
- want to maximize `margin` around line to points
- bias - how far from margin
- can train with closed form(?)
- margins same size on both sides
### Outliers
- don't need overly complex classifier
	- allow for `slack`
	- $\vec{w} \cdot \vec{b} \geq 1$ originally. but have slack $\xi$ 
		- want to minimize $\xi$ as well as $||\vec{w}||$ 
		- only pay a penalty for things we don't classify correctly
- no penalty if correct class
- predict incorrect: linear based on how wrong you were (away from the margin)
	- the margin is that of what the actual class was, not the predicted class

## How to Deal with Nonlinear Data?
 - learn a function to map data onto new dimensions
	 - want data to be pretty linearly separable afterward
### Kernel Trick
- hard to compute transformation for all data points
	- don't need to know transformation for all data points
	- instead, look at distance in high vs low dimension space
		- if distances were pretty similar, then this transformation can be seen as successful
- get dot product of the output of transformations of 2 data points