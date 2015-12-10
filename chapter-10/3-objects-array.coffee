###
   Copyright 2015 Packt Publishing

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
###
array = [
  1,
  2,
  3
]
console.log array 

array = [
  1
  2
  3
]
console.log array 

array = [
  'a', 'b', 'c'
  1, 2, 3
  true, false
]
console.log array 

object = {
  foo: 1
  bar: 2
}
console.log object 

object = 
  foo: 1
  bar: 2
  foobar: 
    another: 3
    key: 4
console.log object 

for value, index in array
  console.log value, index 
  continue if typeof value is 'string'
  console.log 'Value was not a string' 

for value in array
  console.log value 

for key, value of object 
  console.log key, value 

for key, value of object 
    # Note that this will let dates and arrays through ( etc )
    continue unless value instanceof Object 
    for nestedKey, nestedValue of value
      console.log nestedKey, nestedValue 