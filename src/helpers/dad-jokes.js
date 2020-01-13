'use strict';

const network = require( './network-requests' );
const config = require( '../config' );
const url = require( 'url' );

const dadJokes = {};

dadJokes.getAll = async () => {
    const apiEndpoint = url.resolve(config.API_DAD_JOKES, 'search');
    let page = 1;
    let end = false;
    const allJokes = [];

    while ( !end ) {
        const qs = {
            "page": page,
            "max": 30
        }

        const thisPage = await network.get( apiEndpoint, qs, null, true );
        for ( const joke of thisPage.results ) {
            allJokes.push( joke.joke );
        }

        if ( thisPage.current_page === thisPage.total_pages ) {
            end = true;
        } else {
            page++;
        }
    }

    return allJokes;

};

module.exports = dadJokes;