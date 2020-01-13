'use strict';

module.exports = ( req, res ) => {

    console.log( req.body )

    if ( !req.body || !req.body.available || !req.body.available.length ) {
        res.status( 202 ).json({ "Message": "Please provide some letters to work with" });
        return;
    };

    res.status( 200 ).json({ "msg": "Good" });
};
