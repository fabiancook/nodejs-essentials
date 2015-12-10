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
var Users = require( './5-stubs-user-function.js' );
var Assert = require( 'assert' );

it( 'should return a users name', function( ) {
    
    var name = 'NodeJS';
    var user = { name: name };
    
    var stub = Sinon.stub( ).returns( user );
    
    var users = new Users( );
    users.getUser = stub;
    
    var result = users.getNameForUser.call(
	    {
	        getUser: stub
	    },
	    1
	);
    
    Assert.equal( result, name, 'Name not returned' );
});