- spatial keyword search
	- input: spatial & keyword - not just looking for nearest neighbor
	- much harder if has time data
		- n datasets for n times
		- quad tree 
- can use graph algorithms etc for spatial data
- more complicated than analysis/viz
	- have to find something that isn't directly in the data
	- ex. avg gpa
How is spatial data mining different from normal?
- traditional - counting
	- naive bayes gets ratios
	- association rule mining 
- most data mining: assume independent data points
- spatial: things might not be independent b/c spatial closeness
- "if you know info about some place, you will have info about other points in the sample"
	- iid assumption is not valid for spatial
## Spatial Pattern Families
### Hotspots, Spatial Clusters
- areas with high concentrations
	- cholera cases in London vs water pumps
- not stationary
- not always circular
	- traffic hotspots will be the shape of the road for example
### Spatial Outlier, Discontinuities
### Co-locations, Co-Occurrences
- which birds live near which plants
### Location Prediction Models
- impute temperature in pasadena based on LA and El Monte

## Spatial Statistics
- recall: spatial data types - point, line, polygon
- point process
	- example: check if a spatial distribution is random
		- k-function tests complete spatial randomness
	- anything that you can model as a point
- geostatistics
	- continuous data
		- temp in riv and san bernardino has temps in between the 2 places
	- basically can have infinite number of points
- lattice-based statistics
	- think polygons
	- lattice is a hierarchy
		- 50 states cover the same space as 1 usa
		- spatial polygons
## Spatial Autocorrelation
- first law of geography: close things are more correlated than far things
- 