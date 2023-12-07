available on both RDD and Dataframe 
### Types of Streaming
- from hdfs batch processing with spark: 128mb partitions
- micro batching/structured streaming: 1mb batches instead
	- even if data takes hours to process, can have incremental results
- continuous streaming: 1 record at a time
## Timestamps
- by default, will take time stamp of arrival
- many times, data comes w/ timestamps
- assumes data is partially sorted
#### Window Operations
- can do window function on the data
- $n$-minute range: produce data from $n$ minutes ago up until now
	- throw away data outside of window
- 1st param: window size
- 2nd param: how often to check the last $n$ time worth of data
	- sample rate of window, not the amount of overlap
### Watermarking
- data can come out of order
- tell spark how much error to tolerate
- new data comes in for something out of watermark size - can't update (since spark doesn't care about it anymore)
- 