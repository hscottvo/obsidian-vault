#interview 
## Worried about Leaving Quickly
- Want to learn a lot during early career, means don't leave too early
- acknowledge that 10 years for example is more hazy, but short- and medium-term looking to stay at one job for a while and learn more deeply
## STAR Questions
### Learning on the Spot
- Project: RUOES Battery Optimization at SCE
#### S/T
- SCE owns huge batteries to store generated energy from generators in the system
- want to charge when cheap, discharge when expensive
- Constraints
	- business: maximize profits, zero out charge by midnight
	- physical: max charge levels, max charge & discharge rate, max charge amt per day
- base optimizations off of price forecast data on Snowflake, use SQLAlchemy
#### A
- Collect information about the system: business requirements were hazy since it was not written by programmers
	- large organization -> have to find who has what information
- first time using SciPy linear optimization, had to learn the API from scratch   
	- write basic program first, not implementing all the business requirements to learn
	- design with extension in mind, need to add more constraints in the future
- write documentation along the way 
- write tests to ensure expected output, both for optimized values and output data format
#### R
- Currently used to optimize hundreds of MW across 3 batteries
- Learned a lot about tracking down the right people and how to ask the right questions

### Conflict with Coworker
- Project: 7DA load forecasts on Azure
#### S/T
- Developing set of new pipelines to forecast energy usage throughout SoCal, 7 days out
- On Microsoft Azure using automl 
- mentor had one approach in mind, but 
#### A
#### R