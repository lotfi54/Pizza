"use strict";

var bodyParser = require('body-parser');

var express = require('express');

var app = express();

var _require = require('sequelize'),
    Sequelize = _require.Sequelize,
    DataTypes = _require.DataTypes;

var config = require('./config.json');

var sequelize = require('./assets/db/sequelize');

var _require2 = require('./assets/db/sequelize'),
    initDb = _require2.initDb;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); // sequelize.initDb()    
// require('./assets/routes/swager')(app)

require('./assets/routes/userRoute')(app);

require('./assets/routes/finAllPizza')(app);

require('./assets/routes/finPizzaByid')(app);

app.listen(config.port, function () {
  return console.log('Started on port ' + config.port);
});