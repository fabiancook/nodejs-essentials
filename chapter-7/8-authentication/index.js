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
    FS = require( 'fs' );

var server = Http.createServer( handler );

server.listen( 8080 );

function handler( request, response ) {
    if ( request.url === '/login' ) {
        return generateToken( response )
    }

    var index = FS.readFileSync( 'index.html' );
    index = index.toString( );
    
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': Buffer.byteLength( index )
    });
    response.end( index );
}

var JWT = require( 'jsonwebtoken' ),
    Chance = require( 'chance' ).Chance( );

var jwtSecret = 'Our secret';

function generateToken( response ) {

    var payload = {
        email: Chance.email( ),
        name: Chance.first( ) + ' ' + Chance.last( )
    }

    var token = JWT.sign( payload, jwtSecret );

    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': Buffer.byteLength( token )
    })
    response.end(token);
}

var IOServer = require( 'socket.io' );
var io = new IOServer( server );

var SocketIOJWT = require( 'socketio-jwt' );

io.use( SocketIOJWT.authorize({
    secret: jwtSecret,
    handshake: true }));

io.on( 'connection', function( socket ){
        
    var payload = socket.decoded_token;
    var name = payload.name;

    socket.emit( 'message', 'Hello ' + name + '!' );

    var room = 'our room';
    socket.join( room, function( error ) {
        if ( error ) return console.log( error );
        
        socket
        .to( room )
        .emit(
            'message',
            name + ' joined the room!'
        );
    });
});
