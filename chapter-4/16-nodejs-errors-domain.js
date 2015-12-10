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
var Domain = require( 'domain' ),
    domain;

domain = Domain.create( );

domain.on( 'error', function( error ) {
    console.log( 'Domain error', error.message );
});

process.nextTick( function( ) {
    domain.run( function( ) {
        throw new Error( 'Error happened' );
    });
    console.log( "I won't execute" );
}); 

process.nextTick( function( ) {
    console.log( 'Next tick happend!' );
});

console.log( 'I happened before everything else' );