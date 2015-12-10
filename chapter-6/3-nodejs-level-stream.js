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
var LevelUP = require( 'level' ),
    db = new LevelUP( './example-db', {
        valueEncoding: 'json'
    });

db.put( 'key1', { inner: 'value' }, function( error ) {
    if ( error ) return console.log( 'Error!', error )
    
    var stream = db.createReadStream( );
    
    stream
    .on( 'data', function( pair ) {
        console.log( pair.key, "=", pair.value );
    })
    .on( 'error', function( error ) {
        console.log( error );
    })
    .on( 'end', function( ) {
        console.log( 'end' );
    });
});