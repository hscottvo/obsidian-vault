#CS228 #deep_learning #syllabus #intro #email #textbook
[Textbook](https://www.deeplearningbook.org) 
- Topics to be Covered in this Class
	- machine learning
	- optimization 
		- objective function to minimize loss such as `mse`
		- gradient descent etc
	- models
		- deep neural networks cnn, transformation ...
	- applications
# Grading
- assignments 40% no gpt allowed
	- about half are coding half are analysis
	- writing(?)
- #midterm 30% time tbd
- #final_project 30% gpt allowed but need to specify
	- application of deep learning techniques
	- proposal 4%
	- presentation + demo 13%
	- report 13%
# Late Policy
- Assignments
	- 20% off of would-be grade each day
	- 0 if late 3 or more days
	- late days rounded up to the day
- Proposal/report
	- no late submission
# Course Project
- non-trivial application of deep learning techniques
	- can't just use pytorch etc
- group size no more than 5
- project topics flexible but project has to have software implementation and demo
	- can do new application idea
	- or can do new algorithm
	- example project idea: sentiment/trend analysis with gpt
		- fine-tune gpt with api to improve results for certain topics
	- accelerate computation of `attention blocks`
		- computation $softmax(Q \cdot K^T) \cdot V$ 
		- $O(n^2)$ computation $n$ is token length
			- cumbersome (state-of-art 100k token length)
		- low-rank approximation to do computation easily try to shave $n^2$ to $n$ 
## Deliverables
### Proposal
- 1 page
- make sure project isn't too easy or too hard
### Presentations 
- week 10 just for presentations
	- 10-15 minutes 
### Report
- 6-8 pages
- follow NeurlPS 2023 format
- use LaTex (overleaf probably)
# Prerequisites
- linalg
- multivar
- probability
- python
# Office Hours
#office_hours
- prof: `9:50-10:50 W` WCH431
- Rohit: `1-2 M 3-4 F` WCH371

# Computation Resources
GPU access - find out which one to use
- can use google colab not great gpu but probably good enough for this class
- 
