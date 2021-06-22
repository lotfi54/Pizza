const { Pizza } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/pizza', (req, res) => {
    Pizza.findAll()
      .then(pizzas => {
        const message = 'La liste des pizza a bien été récupérée.'
        res.json({ message, data: pizzas })
      })
  })
}