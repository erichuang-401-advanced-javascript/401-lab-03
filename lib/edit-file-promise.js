'use strict';

const fse = require('fs-extra');

class FileManagerP {

  getFileP( filePath ) {
    return fse.readJSON( filePath );
  }

  editFileP( filePath, edits ){
    return fse.writeJSON( filePath, edits );
  }

}

module.exports = FileManagerP;
