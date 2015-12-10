/*
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
*/
var Sinon = require( 'sinon' );
var Assert = require( 'assert' );

var stub = Sinon.stub( ).returns( 42 )
console.log( stub( ) ) // logs 42

var stub = Sinon.stub( )
stub.withArgs( 1, 2, 3 ).returns( 42 )
stub.withArgs( 3, 4, 5 ).returns( 43 )

console.log( stub( 1, 2, 3 ) ) // logs 42
console.log( stub( 3, 4, 5 ) ) // logs 43