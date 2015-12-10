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
var Expect = require( 'chai' ).expect
var Assert = require( 'assert' )

var value = 1

Expect( value ).to.exist
Assert( !!value )

Expect( value ).to.be.ok.and.to.equal( 1 )

Expect( true ).to.be.ok
Expect( false ).to.not.be.ok
Expect( 1 ).to.exists
Expect( [ ] ).to.be.empty
Expect( 'hi' ).to.equal( 'hi' )
Expect( 4 ).to.be.below( 5 )
Expect( 5 ).to.be.above( 4 )
Expect( function() {} ).to.be.instanceOf( Function )

console.log( 'Everything was asserted!' )