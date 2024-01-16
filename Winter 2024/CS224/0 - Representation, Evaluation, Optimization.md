- representation + evaluation + optimization

## Representation
- _mostly_ regression
- function that takes parameters and outputs outputs
	- pretty much just $\hat{y} = f_0(x)$
	- pretty general
	- most ML representations are like this
 - or: learn a $\theta$ to transform data into labels
- non-function rep: 
	- nearest neighbor
		- "one representation of the data is the data itself"
	- svm
	- decision tree
		- decision tree (rf in particular) is actually state-of-the-art in tabular data
  
## Optimization
- _mostly_ #stochastic_gradient descent
	- S not just for convenience, but also have some properties that are better than regular gradient descent
		- don't really have to know why
	- will get some details of sgd towards end of course
	- diff versions can accelerate 
 - anything else: can have analytic/closed form(?) solutions
 - SGD pretty hard to beat
 
### Evaluation
- can mean a few things
	1. what is our loss function?
		- some function $L$, calculate loss
		- set $\theta$ such that $L$ is minimal
	2. accuracy
		- but _NEVER_ would optimize for
		- instead optimize for crossentropy
- has changed the most fundamentally in the past few years
	- difference in what we use the model for & how we train it is different nowadays
	- GPT trained to predict the next word, but used for much more

## Has ML Fundamentally Changed?

### High Level GPT - Similaritites
- fundamentally we have a representation that is like a regression problem
	- vector $x$, pass into $f(x)$ to predict
	- $x = [\text{I am a}]$
	- "I am a cat" -> x = "I am a", y = "cat"
- so can think of it as regression to find next word

### High Level GPT - Differences
- variety of input data can take sequence of (basically) arbirtrary length
- only 2 non-trivial architectures that can do this
	1. 1 word at a time: take word and put something into memory, move on etc
		- coming back - some new thing coming
	2. transformer: works completely different, not in sequence
		- attention mechanisms
- amount of compute used (how big is the model) vs expected loss on next-token prediction
	- loss just keeps going down the more and more compute (and data) you add
	- different from most ML because mostly gets a lot of overfitting