- big data: usually not even 1-NF
	- allow nesting & repitition
## Row-Oriented Stores
- used in traditional databases
- CSV or JSON: each row stored contiguously on the file to represent 1 file
	- same thing w/ JSON - records stored together
- schema defined by 1st row and key-value pairs respectively
- jsons are more flexible but have to repeat schema for each record
- useful when want to use entire record
## Column Format
- useful with analytical queries
	- count, avg, etc
- store each column contiguously instead of rows
- can be compressed more efficiently (contiguous data will be more common with each other)
	- think @gmail is going to be very common
- range search/random access difficult
	- find nth record means you have to count, can't just jump
### diff encoding
- expect data to be fairly similar, can just put value relative to previous column
- deltas can possibly use fewer bits per entry
- can be applied before compression
### Encoding Null Values
- still assume scanning data
- have col of bools for is_exists
- have contiguous separate list for existing values of that col
## Column Format in Big Data
- reading column in separate blocks: can't just start parsing from the middle
	- might have compression
	- have to process data across machines
- store basic column format doesn't work in hdfs - inefficient
## Apache Parquet
- limited to static data (although most column formats are)
	- not designed for transactional queries
- split data across rows rather than columns
	- idea: single records stored in 1 machine
	- still stored column-wise within block
 - uses `protocol buffers format (PBF)` to define schema
	 - repeated, required, optional, group
example schema:
```json
message AddressBook {
	required string owner;
	repeated string ownerPhoneNumbers;
	
}
```
- nested columns can be defined as desired, but parquet only cares about the actual values