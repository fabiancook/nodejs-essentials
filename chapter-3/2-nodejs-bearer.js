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
var users = {
    foo: {
        username: 'foo',
        password: 'bar',
        id: 1
    },
    bar: {
        username: 'bar',
        password: 'foo',
        id: 2
    }
}

var Passport = require( 'passport' ),
    LocalStrategy = require( 'passport-local' ).Strategy;

var localStrategy = new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },
  function(username, password, done) {
    user = users[ username ];

    if ( user == null ) {
        return done( null, false, { message: 'Invalid user' } );
    }
    
    if ( user.password !== password ) {
        return done( null, false, { message: 'Invalid password' } );    
    }

    done( null, user );
  }
)

Passport.use( 'local', localStrategy );

var Express = require( 'express' );

var app = Express( );

var BodyParser = require( 'body-parser' );
app.use( BodyParser.urlencoded( { extended: false } ) );
app.use( BodyParser.json( ) );
app.use( Passport.initialize( ) );

var JSONWebToken = require( 'jsonwebtoken' ),
    Crypto = require( 'crypto' );

var generateToken = function ( user ) {
    
    // The payload just contains the id of the user
    // and their username, we can verify whether the claim
    // is correct using JSONWebToken.verify     
    var payload = {
        id: user.id,
        username: user.username
    };
    // Generate a random string
    // Usually this would be an app wide constant
    // But can be done both ways
    var secret = user.secret || Crypto.randomBytes( 128 )
                       .toString( 'base64' );
    // Create the token with a payload and secret
    var token = JSONWebToken.sign( payload, secret );
    
    // The user is still referencing the same object
    // in users, so no need to set it again
    // If we were using a database, we would save
    // it here
    user.secret = secret

    return token;
}

var generateTokenHandler = function ( request, response  ) {
    var user = request.user;    
    // Generate our token
    var token = generateToken( user );
    // Return the user a token to use
    response.send( token );
};

app.post(
    '/login',
    Passport.authenticate( 'local', { session: false } ),
    generateTokenHandler
);

app.listen( 8080, function( ) {
    console.log( 'Listening on port 8080' );
});
