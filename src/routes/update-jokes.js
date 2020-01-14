'use strict';

const config = require( '../config' );
const chuckNorris = require( '../helpers/chuck-norris' );
const dadJokesDb = require( '../helpers/dad-jokes' );
const fileSystem = require( '../helpers/fileSystem' );
const path = require( 'path' );

module.exports = async ( req, res ) => {

    if ( !req.body || !req.body.secret || req.body.secret !== config.SECRET_UPDATE ) {
        res.status( 403 ).json({ "Message": "Get outta here" });
        return;
    }

    const allJokes = [];

    let chuckJokes;
    try {
        chuckJokes = await chuckNorris.getAll();
    } catch ( err ) {
        console.error( err );
    }

    for ( const joke of chuckJokes.value ) {
        if ( !( allJokes.includes( joke.joke ) ) ) {
            allJokes.push( joke.joke );
        }
    }

    let dadJokes;
    try {
        dadJokes = await dadJokesDb.getAll();
    } catch ( err ) {
        console.error( err );
    }

    for ( const joke of dadJokes ) {
        if ( !( allJokes.includes( joke ) ) ) {
            allJokes.push( joke );
        }
    }

    try {
        await fileSystem.writeJson( path.resolve( 'src/obj/allJokes.json' ), { value: allJokes });
    } catch ( err ) {
        console.error( err );
    }

    res.status( 200 ).json({ "Message": "Working on it" });

};
