[November 2015 Edition](#november-2015-edition)
- [Chapter 1](#chapter-1)
- [Chapter 2](#chapter-2)
- [Chapter 3](#chapter-3)
- [Chapter 4](#chapter-4)
- [Chapter 5](#chapter-5)
- [Chapter 6](#chapter-6)
- [Chapter 7](#chapter-7)
- [Chapter 8](#chapter-8)
- [Chapter 9](#chapter-9)
- [Chapter 10](#chapter-10)

-------------
# November 2015 Edition

-------------
### Chapter 1
-------------
> - Page 7
> - Code block 1
> - Example set 8 

The line where `util` is required should be referencing `util` rather than `utils`

In text: 
```
util = require( "./utils" );
```
Replacement:
```
util = require( "./util" );
```
-------------
> - Page 7
> - Code block 1
> - Example set 8 

The line where `Logger.prototype.log` is defined is missing `function`

In text:
```
Logger.prototype.log = ( message /*...*/ ) {
```
Replacement:
```
Logger.prototype.log = function ( message /*...*/ ) {
```
-------------
### Chapter 2
-------------
> - Page 18
> - Code block 4
> - Example set 9

These requests should be executed with the header `Content-Type` as `text/plain`

-------------
### Chapter 3
-------------
> - Page 29
> - Code block 9
> - Example set 2

The `generateToken` function should accept a single `user` parameter 

In text:
```
var generateToken = function ( request, response ) {
```
Replacement:
```
var generateToken = function ( user ) {
```
-------------
> - Page 29
> - Code block 1
> - Example set 2

In the function `generateToken`, the variable `secret` should be set by `user.secret` if it is already present.

In text:
```
var secret = Crypto.randomBytes( 128 )
  .toString( 'base64' );
```
Replacement:
```
var secret = user.secret || Crypto.randomBytes( 128 )
  .toString( 'base64' );
```
-------------
> - Page 30
> - Code block 1
> - Example set 2

In the function `generateToken`, the variable `secret` should be set on `user.secret`

In text:
```
request.user.secret = secret
```
Replacement:
```
user.secret = secret;
```
-------------
### Chapter 4
-------------

In this chapter we are using port `8000` rather than `8080` as per the other chapters, sorry for this inconvience

-------------
> - Page 43
> - Code block 1
> - Example set 8

When defining an object to be serialized as JSON with information about an error the trailing commas for each property have been left out

In text:
```
console.log( {
  message: error.message
  name: error.name
  stack: error.stack
});
```
Replacement:
```
console.log( {
  message: error.message,
  name: error.name,
  stack: error.stack
});
```
-------------
> - Page 48
> - Code block 1
> - Example set 12
> - Example set 13

The rejection handler for these promises were set up using `fail` rather than the standard `catch`.

In text:
```
.fail( function( error ) {
```
Replacement:
```
.catch( function( error ) {
```
-------------
### Chapter 5
-------------
No Errata for this chapter

-------------
### Chapter 6
-------------
No Errata for this chapter

-------------
### Chapter 7
-------------
> - Page 69
> - Code block 3
> - Example set 1

The client side connection event is `connect`, rather than `connection`

In text:
```
socket.on( 'connection', function( ){
```
Replacement:
```
socket.on( 'connect', function( ){
```
-------------
> - Page 69
> - Code block 4
> - Example set 1

The server side variable used for the IO server is `io` rather than `socket`, the function also is not accepting the `socket` parameter

In text:
```
socket.on( 'connection', function( ){
```
Replacement:
```
io.on( 'connection', function( socket ){
```
-------------
> - Page 70
> - Code block 4
> - Example set 2

The server side variable used for the IO server is `io` rather than `socket`, the function also is not accepting the `socket` parameter

In text:
```
socket.on( 'connection', function( ){
```
Replacement:
```
io.on( 'connection', function( socket ){
```
-------------
> - Page 71
> - Code block 4
> - Example set 1

The server side variable used for the IO server is `io` rather than `socket`, the function also is not accepting the `socket` parameter

In text:
```
socket.on( 'connection', function( ){
```
Replacement:
```
io.on( 'connection', function( socket ){
```
-------------
### Chapter 8
-------------
No Errata for this chapter

-------------
### Chapter 9
-------------
> - Page 87
> - Code block 4
> - Example set 3

When asserting that the spy function has been called `object.spyOnMe` should be used rather than `result`

In text:
```
assert( result.called )
assert.equal( result.args[ 0 ][ 0 ], 1 )
```
Replacement:
```
assert( object.spyOnMe.called )
assert.equal( object.spyOnMe.args[ 0 ][ 0 ], 1 )
```
-------------
### Chapter 10
-------------
> - Page 92
> - Code block 1
> - Example set 1

A JavaScript comment has been used in CoffeeScript code

In text:
```
/* index.coffee */
```
Replacement:
```
# index.coffee
```

