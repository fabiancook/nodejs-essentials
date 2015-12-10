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
class User
  @createUser: ( username ) ->
    return new User( username )

  constructor: ( @username ) ->
  getUsername: -> @username 
  setUsername: ( @username ) ->

class Person extends User
	constructor: ( username, @name, @age ) ->
	    super( username )
    getName: -> @name
  	getAge: -> @age

class Robot extends User
	constructor: ( username, @usage ) ->
		super( username )
	getUsage: -> @usage

console.log new User instanceof User 
console.log new Person instanceof User 
console.log new Robot instanceof User 

fooBar = new Person 'foo.bar', 'Foo Bar', 30 
console.log fooBar.getUsername( ) 
console.log fooBar.getName( )
console.log fooBar.getAge( )