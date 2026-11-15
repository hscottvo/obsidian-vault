### Big Data Storage
- name node keeps track of metadata
- allocate blocks to data nodes
- fixed size blocks
	- easy to move blocks around if needed 
 - questions about storage in general: replication & how it works
	 - given a file, how many blocks & replicas
### Big Data Processing
- Unstructured data processing
- partitions, records in same schema partitioned across diff machines
	- each partition contains many records
- functions have to be memoryless and deterministic
- will ask if function is valid or not
- BSP model: know why we have it
### Structured Data Processing
- think DataFrame
	- RDD + schema
- can optimize
- expect questions about the dataframe vs rdd question
	- can't just do anything with dataframe: have to be able to work w/ structure of data
### Row/Column Formats
- expect questions:
	1. high level row vs column
		- when to use each one
		- which one more efficient given a scenario
- parquet schemas information
### Machine Learning
- Pipelines & dags
- validator & evaluator to get best model
- expect question:
	- diff between tranformer, validator, evaluator, estimator
### NoSQL
- mongodb: row format
	- can do dynamic data
- build index on data
- does not support as efficient scanning as parquet
### End-to-End BDMS
- Asterix
	- mixture of spark/hadoop, index, dbms, schema & schemaless
