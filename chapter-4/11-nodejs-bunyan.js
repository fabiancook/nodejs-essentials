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
var Bunyan = require( 'bunyan' ),
    logger;
logger = Bunyan.createLogger( {
    name: 'chapter-4',
    level: Bunyan.TRACE 
});

try {
    a = function( callback ) {
        return function( ) {
            callback( );
        };
    };
    b = function( callback ) {
        return function( ) {
            callback( );
        }
    };
    c = function( callback ) {
        return function( ) {
            throw new Error( "I'm just messing with you" ); 
        };
    };
    a( b( c( ) ) )( );
} catch ( error ) {
    logger.error( error );
}