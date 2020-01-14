'use strict';

const fs = require( 'fs-extra' );

const fileSystem = {};

fileSystem.writeFile = ( path, contents ) => {
    return fs.writeFile( path, contents );
};

fileSystem.writeJson = ( path, contents ) => {
    return fs.writeJson( path, contents );
};

module.exports = fileSystem;
