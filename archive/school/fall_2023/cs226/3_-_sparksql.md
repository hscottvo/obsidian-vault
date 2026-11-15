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
## SparkSQL Query Plan
- looks at multiple logical plans to find optimized logical plan
- physical plans to check how to actually do the operations
- ends up being more optimized than human-written RDDs, just computer-generated RDDs at the end of the day
## Parsing
- creates unresolved logical plan from either Dataframe or SparkSQL code
	- doesn't matter which one, ends up being RDD anyway
- doesn't know if the logic is correct (table exists etc)
## Analysis
- change datatypes as required
- make sure that subqueries etc correctly feed into others
## Logical Optimization
- applies regex for `like` keyword
	- optimizes existing `like` code
- some optimizations are possible by hand, but code will be more complicated
## Catalyst Query Optimizer
- extension: can add project/org-specific rules to the query optimization
## Physical Optimization
- if indexed, can push selection all the way down to the file parse
- column stores -> can push projection down too
## Code Generation
