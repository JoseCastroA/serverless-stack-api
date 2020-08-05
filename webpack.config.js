const path = require('path');

module.exports = {
  //...
  resolve: {
    alias: {
      libs: path.resolve(__dirname, 'libs/'),
    }
  }
};
