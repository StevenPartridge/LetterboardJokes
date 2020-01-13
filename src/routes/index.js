'use strict'

const router = require('express').Router();
const health = require('./health')

router.get( [ '/api/health', '/api/healthz' ], health );

module.exports = router;
