// Built in Node functionality

// Let's simulate what it is like to visit Google.com
/* const http = require( 'https' ); */

const { request } = require( 'https' )
/* 
const req = http.request( 'https://www.google.com', ( res ) => { */
const req = request( 'https://www.google.com', ( res ) => {
    res.on( 'data', ( chunk ) => {
        console.log( `Data chunk: ${ chunk }` );
    } );
    res.on( 'end', () => {
        console.log( 'No more data' )
    } )
} );


req.end();

// Alternatively
