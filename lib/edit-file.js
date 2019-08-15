'use strict';

const fse = require('fs-extra');

class FileManager {

  getFile( filePath, callback ){

    fse.readFile( filePath, ( error, data ) => {
      if ( error ) {
        throw error;
      } else callback( undefined, JSON.parse( data ) );
    });
  
  }

  editFile ( filePath, data, callback ){

    fse.writeFile( filePath, JSON.stringify( data ), ( error ) => {
      if ( error ) {
        throw error;
      } else callback( undefined );
    });

  }

}

module.exports = FileManager;