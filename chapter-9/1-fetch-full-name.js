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
var GetFullName = require( './1-get-full-name-code.js' ),
    assert = require( 'assert' );
 
describe( 'Fetch full name', function( ) {

    it( 'should return both a first and last name', function( ) {
        var result = GetFullName( { first: 'Node', last: 'JS' } )
        assert.equal( result, 'Node JS' );
    });

    it( 'should throw an error when an object was not passed', function( ) {
	    assert.throws(
	        function( ) {
	            GetFullName( null );
	        },
	        /Object expected/
	    )
	});
})