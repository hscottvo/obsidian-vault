## Structured Data Processing
- RDD can deal with any structure level
- example - filter or mapreduce
	- spark & hadoop deals with logic as black box
	- doesn't care about the functionality, this is why has to be deterministic and stateless
- even structured data: have to parse, since Spark assumes unstructured
## Shark (Spark on Hive)
- hive: read csv's as tables, then can run map reduce using sql
- Spark wanted to run same queries on Spark
	- ended up much faster than hadoop
	- still had to deal with hive's restrictions - not the best
- made their own engine for spark + sql
- SparkSQL translates everything into an RDD job
	- ie with transformations & actions
	- writes complex RDD code for you so you don't have to write
		- ends up running more efficiently
## Dataframes
- relational objects
- dataframes are **not** in 1st normal form
	- 1st normal form - each attribute has to be atomic - only 1 value per cell in the table
	- can't have nested attributes
	- can't have listed attributes
	- has to support different file types - may not be supported
- still lazy execution
- is now aware of data model/structure
- Spark knows all the details of the sql you are running
- can be more efficient - SQL query gets optimized vs user-defined RDD operations being more rigid 
## Operations in SparkSQL
- remember: `filter` is for selecting rows, `select` is for projecting rows
	- `select` used differently in the tools vs relational algebra
- load/store - SparkSQL needs know if there are headers, and delimiter etc
- conversion between RDD and DataFrame back and forth
	- easier to DataFrame to RDD - already has the RDD, just need to remove schema
	- harder to RDD to DataFrame - have to provide schema
## Examples
- pass in conditionals for `filter` - can either do logic in the language's format, or in sql string (think `where` clause)
- can directly run full on sql queries
	- `createOrReplaceTempView` creates an alias for sql to read the file in the query
	- use that in `sqlContext.sql("""<query>""")` to run query
- recall - sql operation takes in relation & outputs relation