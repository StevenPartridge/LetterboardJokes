'use strict';

const config = require( '../config' );
const chuckNorris = require( '../helpers/chuck-norris' );
const dadJokesDb = require( '../helpers/dad-jokes' );

module.exports = async ( req, res ) => {
    
    if ( !req.body || !req.body.secret || req.body.secret !== config.SECRET_UPDATE ) {
        res.status( 403 ).json({ "Message": "Get outta here" });
        return;
    }

    const allJokes = [];

    const chuckJokes = await chuckNorris.getAll();

    for ( const joke of chuckJokes.value ) {
        if ( !( allJokes.includes( joke ) ) ) {
            allJokes.push( joke );
        }
    }

    const dadJokes = await dadJokesDb.getAll();
    for ( const joke of dadJokes ) {
        if ( !( allJokes.includes( joke ) ) ) {
            allJokes.push( joke );
        }
    }

    console.log( allJokes.length );
    res.status( 200 ).json({ "Message": "Working on it" });


};
