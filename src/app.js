'use strict';

const config = require( './config' );
const app = require( 'express' )();
const routes = require( './routes' );
const health = require( './routes/health' );
const express = require( 'express' );
const path = require( 'path' );

// api routes
app.all( '/api/*', routes );

// common health
app.get( [ '/health', '/healthz' ], health );

// The static website/assets to display
app.use( express.static( path.resolve( __dirname, '../public' ) ) );

// common 404
app.use( ( req, res ) => res.status( 404 ).send( 'Not Found' ) );

const server = app.listen( config.PORT, () => {
    console.log( `Server listening on port ${ config.PORT }.` );
});

module.exports = server;
