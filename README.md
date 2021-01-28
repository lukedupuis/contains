# contains
A function to find a string

## Description
Given one string or array of strings in which to search, and one string or array of strings for which to search, the function returns a boolean indicating whether the string was found.

### Parameters

    searchIn: string|string[]
    searchFor: string|string[]
    
### Returns

    boolean
    
## Test Results

Start test: contains.js

  1) Expect searchIn string to contain searchFor string
  
     searchIn  : "Test searchIn string"
     searchFor : "st searc"
     
     ✔ contains(searchIn, searchFor) === true
     
  2) Expect searchIn string not to contain searchFor string
  
     searchIn  : "Test searchIn string"
     searchFor : "st searck"
     
     ✔ contains(searchIn, searchFor) === false
     
  3) Expect searchIn array of strings to contain searchFor string
  
     searchIn  : ["string1","string2"]
     searchFor : "string1"
     
     ✔ contains(searchIn, searchFor) === true
     
  4) Expect searchIn array of strings not to contain searchFor string
  
     searchIn  : ["string1","string2"]
     searchFor : "string3"
     
     ✔ contains(searchIn, searchFor) === false
     
  5) Expect searchIn array of strings to contain at least one string from searchFor array of strings
  
     searchIn  : ["string1","string2"]
     searchFor : ["string3","string1"]
     
     ✔ contains(searchIn, searchFor) === true
     
  6) Expect searchIn array of strings not to contain any string from searchFor array of strings
  
     searchIn  : ["string1","string2"]
     searchFor : ["string3","string4"]
     
     ✔ contains(searchIn, searchFor) === false
     
  7) Expect searchIn string to contain any string from searchFor array of strings
  
     searchIn  : Test string3
     searchFor : ["string2","string3"]
     
     ✔ contains(searchIn, searchFor) === true
     
  8) Expect searchIn string not to contain any string from searchFor array of strings
  
     searchIn  : Test string3
     searchFor : ["string1","string2"]
     
     ✔ contains(searchIn, searchFor) === true