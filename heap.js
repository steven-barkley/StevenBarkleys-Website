//Callback Queue = Task Queue

// setTimeOut is a facade=function but really a Web Api
setTimeout( () => { console.log( '1', 'is the loneliest' ) }, 0 )
setTimeout( () => { console.log( '2', 'can be as bad as one' ) }, 10 )

//2 Job Queue = Microtask Queue ( Job @1 priority )
Promise.resolve( 'hi' ).then( ( data ) => console.log( '2', data ) )

//3 
console.log( '3', 'is a crowd' )