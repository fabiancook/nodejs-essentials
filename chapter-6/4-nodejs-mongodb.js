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
var MongoDB = require('mongodb'),
    MongoClient = MongoDB.MongoClient;

connection = "mongodb://localhost:27017/database"

MongoClient.connect( connection, function( error, db ) {
    if( error ) return console.log( error );

    console.log( 'We have a connection!' );

	var collection = db.collection( 'collection_name' );

	var doc = {
	    key: 'value_1'  
	};
	collection.save( doc, { w: 1 }, function( ) {
	    console.log( 'Document saved' )
	});

	var ObjectId = MongoDB.ObjectId
	// This document already exists in my database
	var doc_id = {
	    _id: new ObjectId( "55b4b1ffa31f48c6fa33a62a" ),
	    key: 'value_2'
	};
	collection.save( doc_id, { w: 1 }, function( ) {
	    console.log( 'Document with ID saved' );
	});

	collection.find( ).toArray( function( error, result ) {
	    console.log( result.length + " documents in our database!" )
	});

	collection.find(
	    { _id: new ObjectId( "55b4b1ffa31f48c6fa33a62a" ) },
	    function( error, documents ) {
	        console.log( 'Found document', documents[ 0 ] );
	    }
	);

	collection.find(
	    { key: 'value' },
	    function( error, documents ) {
	        console.log( 'Found', documents.length, 'documents' );  
	    }
	);

	collection.find(
	    {
	        $or: [
	            { key: 'value' },
	            { key: 'value_2' }
	        ]
	    },
	    function( error, documents ) {
	        console.log( 'Found', documents.length, 'documents' );  
	    }
	);

	// Add this in there so the process dies
	// Mongo keeps the process alive
	setTimeout( process.exit.bind( process, 0 ), 500 );
});