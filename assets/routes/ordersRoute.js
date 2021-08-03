const { Order } = require('../db/sequelize')
  
module.exports = (app) => {

  app.post("/api/orders/placeorder", async(req, res) => {
  
    const {subtotal , currentUser , cartItems} = req.body
    try {
      
        Order.create({
              name : currentUser.name,
              email : currentUser.email ,
              userid : currentUser.id ,
              orderItems : cartItems , 
              orderAmount : subtotal,
  }).then((orders) => {
    res.status(200).json({
      status: true,
      message: "Book created successfully",
    });
  });

        
    
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});



app.post("/api/orders/getuserorders", async(req, res) => {

const {userid} = req.body 

try{

  const orders = await Order.findAll(


    {where:{userid:userid},
    
  order: [
      ['id', 'DESC']
    ]
  
  })

  res.send(orders)

}catch(error){
    return res.status(400).json({message:`Erreur aucune commande n'a été trouvé`})
}

})

}
