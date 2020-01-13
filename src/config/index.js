'use strict';

module.exports = {
    PORT: process.env.PORT || 8080,
    NODE_ENV: process.env.NODE_ENV || 'production',
    API_CHUCK_NORIS: process.env.API_CHUCK_NORIS || 'https://api.icndb.com/',
    API_DAD_JOKES: process.env.API_DAD_JOKES || 'https://icanhazdadjoke.com/',
    SECRET_UPDATE: process.env.SECRETPASSWORD,
};
