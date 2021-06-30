const { Pizza } = require('../db/sequelize')
  
module.exports = (app) => {
  // app.get('/api/pizza', (req, res) => {
  //   Pizza.findAll({})
  //     .then(pizzas => {
  //       res.send(pizzas)
  //     })
  // })

  app.get("/api/pizza", async(req, res) => {
  
    try {
        const pizzas = await Pizza.findAll({})
        res.send(pizzas)
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

}
