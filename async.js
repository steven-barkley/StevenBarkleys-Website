// ASYNC AWAIT

// A function  that returns a promise
/* 
async function playerStart() {
    const first = await movePlayer( 100, "left" ); // pause
    const second = await movePlayer( 400, "left" ); // pause
    const thrid = await movePlayer( 10, "right" ); // pause
    const last = await movePlayer( 330, "left" ); // pause
} */

fetch( 'https://jsonplaceholder.typicode.com/users' )
    .then( resp => resp.json() )
    .then( console.log )

async function fetchUsers() {
    const resp = await fetch( 'https://jsonplaceholder.typicode.com/users' )
    const data = await resp.json()
    console.log( data )
}