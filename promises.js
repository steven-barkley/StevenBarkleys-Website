//Why use promises

// A promise is an object that may produce a single value some time in the future
/* 
promisedAction( "A value", "A string" )
    .then( () => promisedAction( "A different value", "A different string" ) )
    .then( () => promisedAction( "A different value", "A different string" ) )
    .then( () => promisedAction( "A different value", "A different string" ) ) */

const promise = new Promise( ( resolve, reject ) => {
    if ( true ) {
        resolve( 'Stuff Worked' );
    } else {
        reject( 'Error, it broke' )
    }
} )

promise
    .then( result => console.log( result + "!" ) )
    .then( result2 => {
        throw Error
        console.log( result2 );
    } )
    .catch( () => console.log( 'errRROOR' ) )