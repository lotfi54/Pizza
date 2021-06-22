const { Sequelize, DataTypes } = require('sequelize')
const pizzaModel = require('../src/Models/pizza')
const pizzas = require ('../../pizzasdata')

const sequelize = new Sequelize('kymco', 'root', '', {
    host: 'localhost',
    PORT: 3306,
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT-2',
    },
    logging: false
  })
  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  
  const Pizza = pizzaModel(sequelize,DataTypes)
  
const initDb = () => {
  return sequelize.sync({force:true})
  .then(() => {
      pizzas.map(pizza =>{
          Pizza.create({
              name: pizza.name,
              varients: pizza.varients.join(),
              prices: pizza.prices.join(),
              category: pizza.category,
              image: pizza.image,
              description: pizza.description,              
            }).then(hey => console.log(hey.toJSON()))
        })
        console.log('Base de donnée pizza a bien été sychronisé');
  })

}
  
module.exports = { 
  initDb, Pizza
}