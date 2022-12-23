const mission = process.argv[ 2 ];

if ( mission === 'learning' ) {
    console.log( 'Time to write some Node code!' );
} else {
    console.log( `Is ${ mission } really more fun?` );
}

