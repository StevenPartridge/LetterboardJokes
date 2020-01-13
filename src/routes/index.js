'use strict'

const router = require('express').Router();
const health = require('./health')
const jokeChecker = require('./joke-checker');
const updateJokes = require( './update-jokes' );

const bodyParser = require( 'body-parser' );

router.get( [ '/api/health', '/api/healthz' ], health );
router.post( '/api/check', bodyParser.json(), jokeChecker );
router.post( '/api/update', bodyParser.json(), updateJokes );

module.exports = router;
