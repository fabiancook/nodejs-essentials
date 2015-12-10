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

var returnOriginal = function( value ) {
    return value;
}

var spy = Sinon.spy( returnOriginal );

result = spy( 1 );
console.log( result ); // Logs 1

assert( spy.called );
assert.equal( spy.args[ 0 ][ 0 ], 1 );

var object = {
    spyOnMe: function( value ) {
        return value;
    }
}
Sinon.spy( object, 'spyOnMe' )

var result = object.spyOnMe( 1 )
assert( result.called )
assert.equal( result.args[ 0 ][ 0 ], 1 )

object.spyOnMe.restore( )