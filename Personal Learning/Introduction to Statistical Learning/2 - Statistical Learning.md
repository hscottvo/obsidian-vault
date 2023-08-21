#Notes #Stats #Chapter2
[[0 - Introduction to Statistical Learning|Info]]
PDF [pages 26 - 69](https://hastie.su.domains/ISLR2/ISLRv2_website.pdf#page=26)
Book `pages 15 - 58`
# 2.1 - What is Statistical Learning?
## Example - Media Advertising
- premise: client has tv, radio, newspaper data
- want to determine association between advertising and sales
- `input variable` - advertising budget
	- synonyms: `predictor`, `independent variable`, `feature`, `variable`
- `output variable` - sales
## Notation 
- different input variables denoted with subscripts
	- $X_1$ - TV
	- $X_2$ - radio
	- $X_3$ - newspaper
- `p` - number of predictors 
	- predictors $X = (X_1, X_2, \ldots, X_p)$ 
- Relationship between $Y$ and $X$ written as $Y = f(X) + \epsilon$
- $\epsilon$ - `error term`
	- independent of $X$ 
	- $\mu = 0$
- $x_{ij}$ - value for $j$th predictor in the $i$th observation
## Estimating $f$
- 2 main reasons to estimate $f$ : `prediction`, `inference`
- Situations can fall under either or both
### Prediction
- inputs $X$ available, output $Y$ not available
- $\epsilon = 0 \rightarrow$ predict $Y$ using $\hat{Y} = \hat{f}(X)$ 
	- `estimate` of $f$ denoted as $\hat{f}$ 
	- `prediction` of $Y$ denoted as $\hat{Y}$
- $\hat{f}$ usually treated as a `black box`
#### Example - Blood Samples
- Let $X$ be characteristics of a blood sample, $Y$ be risk of reaction to drug
- $\hat{Y}$ 's accuracy depends on _reducible_ and _irreducible_ error
- `reducible error` - can potentially improve accuracy of $\hat{f}$ by improving statistical modelling
- `irreducible error` - cannot improve, as long as definition of $Y$ has $\epsilon$ in it
	- no matter how well we estimate $f$, cannot reduce error from $\epsilon$
	- $\epsilon$ can include unmeasured variables or variation
#### More Examples
- Is this house under- or over-valued?
### Inference
- want to know association between $Y$ and $X$ ($\hat{f}$) but not to make prediction of $Y$
- $\hat{f}$ _cannot_ be treated as a black box (inference wants to find its exact form)
- Want to answer questions
	1. What predictors associated with the response? 
		- figure out what predictors are associated with $Y$ 
		-  sounds like feature selection
	2. Relationship between response and each predictor?
		- per-feature 
	3. linear relationship, or something more complicated? 
#### Examples
- association between media types and sales
- which media contributes most to sales
- ratio of advertising increase to sales increase
- extent of price-to-sales association
- with inputs like crime rate, zoning, distnace from river, air quality, schools, community income levels, house size, etc: House worth increase from having a view of the river


## How do we estimate $f$?
- goal find function $\hat{f}$ such that $Y \approx \hat{f}(X)$ 
- separated into `parametric` or `non-parametric`
![[Pasted image 20230820195238.png | center | 350]]
<p style="text-align:center;">training data</p> 
### Parametric Methods
- 2-step model-based approach
1. make assumption about form/shape of $f$ (linear, etc)
2. use training data to `fit`/`train` data
	- adjust parameters (coefficients, usually) to get as close to $Y$ as possible
- simplifies estimating $f$ - easier to fit the parameters than the entire function $f$
- can oversimplify $\rightarrow$ estimates will be poor
- can also `overfit` by using too complex of a model
- example: $income \approx B_0 + B_1 \times education + B_2 \times seniority$  
![[Pasted image 20230820195310.png | center | 350]]
<p style="text-align:center;">linear model</p> 
### Non-Parametric Methods
- do not make explicit assumptions about $f$
	- find estimate based on data points only
- do not assume the functional form
- in parametric, functional form of the estimate might be very different from that of $f$
- usually uses very large number of observations compared to parametric
- example #thin-plate_spline just gets surface as close to datapoints as possible, given a smoothness parameter
![[Pasted image 20230820195059.png | center | 350]]
<p style="text-align:center;">thin-plate splice with low smoothness</p> 
- lower level of smoothness (above) can be more variable (`overfitting`)
![[Pasted image 20230820200228.png | center | 350]]
<p style="text-align:center;">thin-plate splice with high smoothness</p> 
- choosing smoothness levels covered in #Chapter5, and splines in #Chapter7 
## Prediction Accuracy vs Model Interpretability
- Why choose a restrictive method over a flexible one?
	- inference is easier since we can understand the model more easily
- `GAM` - Generalized additive model adds onto linear model by allowing some non-linear relationships
	- more flexible, less interpretable than linear regression
	- relationships between predictors and responses modeled using curve
- #bagging, #boosting, #svm  very flexible and hard to interpret
- sometimes, more flexible might be better in the context of predictors
	- #overfitting makes it not universally true\
## Supervised vs Unsupervised
#supervised_learning each observation of predictors has associated response
- aim to accurately predict response for future observations
#unsupervised_learning measurements do not have associated response $y_i$ 
- cannot fit - working "blind" by not checking against response variable - hence the name _unsupervised_
- can try to understand relationship between variables or between observations
- most common: #cluster_analysis
	- determine which of the relatively distinct groups the observation falls into
	- example - big spenders vs low spenders based on zip code, family income, shopping habits
	- might not be able to do supervised if do not have data on whether a person is a big or small spenders
![[Pasted image 20230820202237.png | center | 500]]
<p style="text-align:center;">good (left) and bad (right) case for clustering</p> 
## Regression vs Classification
- variables can be either quantitative or qualitative
- quantitative: numerical, qualitative: categorical
- _usually_ regression is for quantitative, but sometimes can be used in qualitative (like in #logistic_regression)
- #k-nearest_neighbors or #boosting can be used for both
# 2.2 - Assessing Model Accuracy
- no free lunch in statistics - no catch-all
## Measuring Quality of Fit
- need to measure how effective a model is
- quantify the extent to which the predicted response is close to the true response
- most commonly used: #MSE or mean-squared error 
- $MSE = \dfrac{1}{n} \sum_{i=1}^n(y_i - \hat{f}(x_i))^2$
	- this variation is correcting based on training data, so it's technically called `training MSE`
	- usually don't care about training MSE
	- more interested in accuracy of predictions on previously unseen data
	- usually hard to get test data for test MSE, so have to do #cross-validation
![[Pasted image 20230820204728.png | center | 600]]
## Bias-Variance Trade-Off
- error is a combination of variance of $\hat{f}$, squared bias of $\hat{f}(x_0)$, and variance of the error $\epsilon$ 
	-  to minimize error, have to have both low variance and low bias
- expected test MSE can never be below Var($\epsilon$) (irreducible error)
- #variance amount $\hat{f}$ would change when estimating against a different training set
	- high variance $\rightarrow$ small changes in data can change $\hat{f}$ a lot
- #bias error introduced by approximating a problem that is more 
- generally, more flexible means less bias and more variance
	- bias usually decreases earlier than variance increases, but has diminishing returns
	- variance continues to increase after bias stops decreasing by a substantial amount
## The Classification Setting 
- most common approach is to get #error_rate $\dfrac{1}{n} \sum_{i=1}^nI(y_i \neq \hat{y_i})$
	- $I$ is an indicator variable: 1 if true, 0 if false
### Bayes Classifier
#bayes
- assign each observation based on most likely class, based on predictor values
- want to maximize $Pr(Y = j | X = x_0)$ where $j$ is the class that the observation is being assigned to
- `Bayes decision boundary` defines the classifier's prediction
- produces the lowest possible test error rate: `Bayes error rate`
![[Pasted image 20230820213609.png | center | 600]]
### K-Nearest Neighbors
#knn
* real data not always nice for Bayes
	* don't always have the conditional distribution
* attempts to estimate conditional distribution of $Y$ given $X$, then classify observation to class with highest (estimated) probability
![[Pasted image 20230820213654.png | center | 600]]
- as $\dfrac{1}{K}$ increases, flexibility increases but overfit VERY easily
![[Pasted image 20230820214020.png | center | 600]]
$$\text{as }\dfrac{1}{K} \text{increases, flexibility increases, but gets overfit VERY easily}$$
