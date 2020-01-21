'use strict';

const validLetters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
const allJokes = require( '../obj/all-jokes' );

module.exports = ( lettersAvailable ) => {

    const jokeList = allJokes.value;

    lettersAvailable = lettersAvailable.toLowerCase();

    if ( lettersAvailable.length === 0 ) {
        return [];
    }
    if ( jokeList.length === 0 ) {
        return [];
    }

    const viableJokes = [];

    for ( let joke of jokeList ) {

        let breakJoke = false;

        joke = joke.toLowerCase();

        if ( typeof joke !== "string" ) {
            continue;
        }

        for ( const character of joke ) {
            if ( !validLetters.includes( character ) ) {
                continue;
            }

            if ( character !== " " ) {
                const findChar = new RegExp( character, 'g' );
                const foundInJoke = ( joke.match( findChar ) || [] ).length;
                const foundInPool = ( lettersAvailable.match( findChar ) || [] ).length;
                if ( foundInJoke > foundInPool ) {
                    breakJoke = true;
                    break;
                }
            }
        }

        if ( breakJoke ) {
            continue;
        }

        viableJokes.push( joke );
    }

    return viableJokes;

};
