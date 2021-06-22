const { Pizza } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/pizza/:id', (req, res) => {
    Pizza.findByPk(req.params.id)
      .then(pizzas => {
        const message = 'La pizza a bien été trouvé.'
        res.json({ message, data: pizzas })
      })
  })
}