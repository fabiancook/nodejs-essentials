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
function parseJSONAndUse( input ) {
    var json = null;
    try {
        json = JSON.parse( input );
    } catch ( error ) {
        return Q.reject( new Error( "Couldn't parse JSON" ) );
    }
    return Q( use( json ) );
}

process.on( 'uncaughtException', function errorProcessHandler( error ) {
    logger.fatal( error );
    logger.fatal( 'Fatal error encountered, exiting now' );
    process.exit( 1 );
});