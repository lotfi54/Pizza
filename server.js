

const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require('sequelize')
const config = require('./config.json')
const sequelize = require('./assets/db/sequelize')
const { initDb } = require('./assets/db/sequelize')

    
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true })); 

       
    // sequelize.initDb()    

    // require('./assets/routes/swager')(app)
    require('./assets/routes/finAllPizza')(app)
    require('./assets/routes/finPizzaByid')(app)

 
   
     
app.listen(config.port, () => console.log('Started on port '+config.port))
       

