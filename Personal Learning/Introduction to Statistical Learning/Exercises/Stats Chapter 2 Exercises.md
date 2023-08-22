[page 63](https://hastie.su.domains/ISLR2/ISLRv2_website.pdf#page=63)
[solutions](https://github.com/asadoughi/stat-learning/)
`red`: looked at solution
# Conceptual
1. For each of parts (a) through (d), indicate whether we would generally expect the performance of a flexible statistical learning method to be better or worse than an inflexible method. Justify your answer.
	1. __The sample size n is extremely large, and the number of predictors p is small__
		- `flexible: enough samples where don't need to worry about overfitting as much`
	2. __The number of predictors p is extremely large, and the number of observations n is small.__ 
		- inflexible: too few samples makes it easy to overfit
	3. __The relationship between the predictors and response is highly non-linear.__
		- flexible: more nonlinear -> more flexible
	4. __The variance of the error terms, i.e. σ2 = Var(ϵ), is extremely high.__
		- inflexible: `flexible will fit to the noise`
2. Explain whether each scenario is a classification or regression problem, and indicate whether we are most interested in inference or prediction. Finally, provide n and p.
	1. __We collect a set of data on the top 500 firms in the US. For each firm we record profit, number of employees, industry and the CEO salary. We are interested in understanding which factors affect CEO salary__
		1. regression, inference. n = 500 p = 3
	2. __We are considering launching a new product and wish to know whether it will be a success or a failure. We collect data on 20 similar products that were previously launched. For each product we have recorded whether it was a success or failure, price charged for the product, marketing budget, competition price, and ten other variables.__
		1. classification, prediction. n = 20 p = 13
	3. __We are interested in predicting the % change in the USD/Euro exchange rate in relation to the weekly changes in the world stock markets. Hence we collect weekly data for all of 2012. For each week we record the % change in the USD/Euro, the % change in the US market, the % change in the British market, and the % change in the German market.__ 
		1. regression, prediction. n = 52 p = 3
3. We now revisit the bias-variance decomposition.
	1. __Provide a sketch of typical (squared) bias, variance, training error, test error, and Bayes (or irreducible) error curves, on a single plot, as we go from less flexible statistical learning methods towards more flexible approaches. The x-axis should represent the amount of flexibility in the method, and the y-axis should represent the values for each curve. There should be five curves. Make sure to label each one.__
	2. 
	3. __Explain why each of the five curves has the shape displayed in part (a).__
4. You will now think of some real-life applications for statistical learning.
	1. __Describe three real-life applications in which classification might be useful. Describe the response, as well as the predictors. Is the goal of each application inference or prediction? Explain your answer__
		1. object classification: image data - prediction
		2. fraud detection: purchase amounts, time, location - prediction
		3. what causes a car crash to be fatal
	2. __Describe three real-life applications in which regression might be useful. Describe the response, as well as the predictors. Is the goal of each application inference or prediction? Explain your answer.__
		1. weather forecast: temps, cloud cover - prediction
		2. `price to sales amounts`: prices, sales numbers - inference
		3. housing prices: area prices, lat long, weather, average salary in area - prediction
	3. __Describe three real-life applications in which cluster analysis might be useful.__
		1. image segmentation: image data - prediction
		2. `recommendation systems`
		3. `genetics`
5. What are the advantages and disadvantages of a very flexible (versus a less flexible) approach for regression or classification? Under what circumstances might a more flexible approach be preferred to a less flexible approach? When might a less flexible approach be preferred?
	1. flexible
		1. nonlinear $f$ 
		2. lots of data
		3. `easily overfit`
	2. inflexible
		1. close to linear $f$
		2. small sample size
		3. want to understand features
6. Describe the differences between a parametric and a non-parametric statistical learning approach. What are the advantages of a parametric approach to regression or classification (as opposed to a nonparametric approach)? What are its disadvantages?
	1. parametric: try to guess the form of $f$
		1. tune weights to get model as close as possible
		2. advantage: easier to understand
		3. `can overfit if too many parameters`
		4. `can overfit if assumed form is wrong`
		5. easier to compute(?)
	2. non-parametric: based only on the datapoints
		1. needs a lot more data
7. The table below provides a training data set containing six observations, three predictors, and one qualitative response variable.
![[Pasted image 20230821211219.png | center | 700]]
	1. __Compute the Euclidean distance between each observation and the test point, X1 = X2 = X3 = 0.__
		1. $3$, $2$, $\sqrt{10}$, $\sqrt{5}$, $\sqrt{2}$, $\sqrt{3}$
	2. __What is our prediction with K = 1? Why?__
		1. green - takes the $1$ closest observation
	3. __What is our prediction with K = 3? Why?__
		1. red - $2$ red close vs $1$ green close
	4. __If the Bayes decision boundary in this problem is highly nonlinear, then would we expect the best value for K to be large or small? Why?__
		1. small - so the KNN can be more fit to the data