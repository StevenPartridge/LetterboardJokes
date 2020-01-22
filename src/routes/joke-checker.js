'use strict';

const checker = require( '../helpers/checker' );

module.exports = ( req, res ) => {

    if ( !req.body || !req.body.available || !req.body.available.length ) {
        res.status( 200 ).json({ "message": "No letters provided", "availableJokes": [] });
        return;
    }

    const viableJokes = checker( req.body.available );

    res.status( 200 ).json({ "message": "Good", "availableJokes": viableJokes });
};
