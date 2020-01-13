'use strict';

const network = require( './network-requests' );
const config = require( '../config' );
const url = require( 'url' );

const chuckNorris = {};

chuckNorris.getAll = () => {
    const apiEndpoint = url.resolve(config.API_CHUCK_NORIS, 'jokes');
    return network.get( apiEndpoint, null, null, true );
};

module.exports = chuckNorris;