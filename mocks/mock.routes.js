const path = require('path');
const forEach = require('lodash/forEach');
const CONFIG_GETS = require('./mock.conf.get');
const fs = require('fs');



const MOCK_CONF_GET = Object.assign({}, CONFIG_GETS);

const appRouter = function(app) {

  forEach(MOCK_CONF_GET, (mock, url) => {
    app.get(url, (req, res) => {
      const target = path.join(__dirname, mock);
      console.log('[mock] serving', mock);
      req.headers["X-Custom-Header"] = "yes";
      res.sendFile(target);
    });

  });
};

module.exports = appRouter;

