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
### Diff Encoding
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
	group contacts {
		name: "Scott", 
		number: 555-555-5555
	}	
}
```
- nested columns can be defined as desired, but parquet only cares about the actual values  

| owner | ownerphonenumbers | contacts.name | contacts.number |
| ----- | ----------------- | ------------- | --------------- |
|  …      | …                   | …               | …                 |

### Definition Level
- definition levels let you know how many nulls in nesting
- definition level: how many scopes are non-null
	- `a: null` has def level 0
	- `a: {b: {c: null } }` has def level 2
	- `a: {b: {c: "abc"} }` has def level 3
	- level cannot be defined if previous are not defined -> level defined assumes all levels before are defined
 - can skip definition levels that are not possible
	 - `optional group a {required group b {optional string c }} ` -> `a: {b: null}` is not possible -> skip that definition
- max def level: max number of nullables up until and including the attribute
### Repetition Level
- level at which we create new list
- value is the lowest level that it is the newest of
- " was it added as a level2 array, a level1 array, or new object?"
	- 0: started new record
	- 1: started new object at level 1
	- 2: started new object at level 2
- max rep level: sum of repeatables up until and including the attribute