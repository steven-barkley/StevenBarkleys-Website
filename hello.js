const mission = process.argv[ 2 ];

if ( mission === 'learning' ) {
    console.log( 'Time to write some Node code!' );
} else {
    console.log( `Is ${ mission } really more fun?` );
}

//2 

Promise.resolve( 'Data that was requested' ).then( ( data => console.log( '2', data ) ) )

//3
console.log( '3', 'is a crowd' )