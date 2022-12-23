function decrypt( data ) {
    return 'decrypted'
}

function read() {
    return decrypt( 'data' );
}

module.exports = {
    read,
}
