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
var Morgan = require( 'morgan' ),
    Router = require( 'router' ),
    Http = require( 'http' );

router = new Router( );

router.use( Morgan( 'combined' ) ); 

/* Simple server */
Http.createServer( function( request, response ) {
    router( request, response, function( error ) {
        if( !error ) {
            response.writeHead( 404 );  
        } else {
            //Handle errors
            console.log( error.message, error.stack );
            response.writeHead( 400 );
        }
        response.end( '\n' );
    
    });
}).listen( 8000 );

console.log( 'Server running on port 8000' );

function getInfo ( request, response ) {
    var info = process.versions;

    info = JSON.stringify( info );
    response.writeHead( 200, { 'Content-Type': 'application/json' } );
    response.end( info );
}
router.get( '/info', getInfo );