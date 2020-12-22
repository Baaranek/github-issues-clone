const path = require('path');

module.exports = {
  resolve: {
    alias: {
      // These are just examples TODO Alias
      Utilities: path.resolve(__dirname, 'src/utilities/'),
      Templates: path.resolve(__dirname, 'src/templates/'),
    },
  },
};
