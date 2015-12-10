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

var BodyParser = require( 'body-parser' );
router.use( BodyParser.text( ) );

var counter = 0,
    messages = { };

function createMessage( request, response ) {
    var id = counter += 1,
        message = request.body;
        
    console.log( 'Create message', id, message );
    messages[ id ] = message;
    response.writeHead( 201, {
        'Content-Type': 'text/plain',
        'Location': '/message/' + id 
    });
    response.end( message );
}
router.post( '/message', createMessage );

function readMessage( request, response ) {
    var id = request.params.id,
        message = messages[ id ];
    
    if( typeof message !== 'string' ) {
        console.log( 'Message not found', id );

        response.writeHead( 404 );
        response.end( '\n' );
        return;
    } 
    
    console.log( 'Read message', id, message );
    
    response.writeHead( 200, {
        'Content-Type': 'text/plain'
    });
    response.end( message );
}
router.get( '/message/:id', readMessage );


function deleteMessage( request, response ) {
    var id = request.params.id,
        message = messages[ id ];
    
    if( typeof message !== 'string' ) {
        console.log( 'Message not found', id );

        response.writeHead( 404 );
        response.end( '\n' );
        return;
    }

    console.log( 'Delete message', id );

    messages[ id ] = undefined;

    response.writeHead( 204, { } );

    response.end( '' );
}

router.delete( '/message/:id', deleteMessage );
    
function readMessages( request, response ) {
    var id,
        message,
        messageList = [ ],
        messageString;

    for( id in messages ) {
        if( !messages.hasOwnProperty( id ) ) {
            continue;
        }
        message = messages[ id ];
        // Handle deleted messages
        if( typeof message !== 'string' ) {
            continue;
        }
        messageList.push( message );
    }
    
    console.log( 'Read messages', JSON.stringify( 
        messageList, 
        null, 
        '  ' 
    ));
    
    messageString = messageList.join( '\n' );
     
    response.writeHead( 200, {
        'Content-Type': 'text/plain'
    });

    response.end( messageString );
}
router.get( '/message', readMessages );

server.listen( 8080, function( ) {
    console.log( 'Listening on port 8080' );
});

