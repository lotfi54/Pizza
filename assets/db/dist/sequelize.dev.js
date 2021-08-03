"use strict";

var _require = require('sequelize'),
    Sequelize = _require.Sequelize,
    DataTypes = _require.DataTypes;

var pizzaModel = require('../src/Models/pizza');

var userModel = require('../src/Models/userModel'); // const pizzas = require ('../../pizzasdata')


var sequelize = new Sequelize('pizza', 'root', '', {
  host: 'localhost',
  PORT: 3306,
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2'
  },
  logging: false
});
sequelize.authenticate().then(function () {
  console.log('Connection has been established successfully.');
})["catch"](function (err) {
  console.error('Unable to connect to the database:', err);
});
var Pizza = pizzaModel(sequelize, DataTypes);
var User = userModel(sequelize, DataTypes);

var initDb = function initDb() {
  return sequelize.sync({
    force: true
  }).then(function () {
    pizzas.map(function (pizza) {
      Pizza.create({
        name: pizza.name,
        varients: pizza.varients,
        prices: pizza.prices,
        category: pizza.category,
        image: pizza.image,
        description: pizza.description
      }).then(function (hey) {
        return console.log(hey.toJSON());
      });
    });
    console.log('Base de donnée pizza a bien été sychronisé');
  });
};

module.exports = {
  initDb: initDb,
  Pizza: Pizza,
  User: User
};