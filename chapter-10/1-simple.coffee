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
console.log 1 + 1 
console.log 'Hello' 
console.log 'Hello CoffeeScript!' 

if true 
  console.log 'It was true!'

func = ->
  console.log 'I executed'

func( )

add = ( a, b ) -> a + b 

console.log add 1, 2 

keys = { }
func = ( key, date = new Date ) ->
  keys[ key ] = date	
func 'a'
func 'b'
console.log keys 