'use strict';

const rp = require( 'request-promise' );

const requests = {};

requests.get = ( uri, qs = null, headers = {}, json = true ) => {

    const options = {
        uri: uri,
        qs: qs,
        headers: headers,
        json: json
    };

    return rp( options );

};

module.exports = requests;
