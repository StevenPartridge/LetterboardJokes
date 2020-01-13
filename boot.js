'use strict';

const config = require( './src/config' );

// check for environment, if not, assume dev
if ( config.NODE_ENV === 'development' ) {

    // require .env configuration
    require( 'dotenv' ).config();
}

// require application
module.exports = require( './src/app' );
