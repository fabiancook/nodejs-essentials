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
var Http = require( 'http' ),
    Router = require( 'router' ), 
    server,
    router; 

router = new Router( );

server = Http.createServer( function( request, response ) {
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
});

router.use( function( request, response, next ) {
    console.log( 'middleware executed' );
    // Null as there were no errors
    // If there was an error then we could call `next( error );`
    next( null );
});

var counter = 0,
    messages = { };

function createMessage( request, response ) {
    var id = counter += 1;
    console.log( 'Create message', id );
    response.writeHead( 201, {
        'Content-Type': 'text/plain'
    });
    response.end( 'Message ' + id );
}
router.post( '/message', createMessage );
    
server.listen( 8080, function( ) {
    console.log( 'Listening on port 8080' );
});

