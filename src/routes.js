const controller = require('./controller');

module.exports = function(app) {
  app.get('/search', controller.searchQuery);
};
