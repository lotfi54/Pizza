const { User } = require('../db/sequelize')
  
module.exports = (app) => {

  app.post("/api/users/register", (req, res) => {
   

    User.create(req.body)
      .then(users => {
        const message = `Le user ${req.body.name} a bien été crée.`
        res.json({ message, users: users })
      })
        .catch(error => {
        const message = `L'utilisateur n'a pas été enregistrer`
        res.status(500).json({message:message, data:error})
      })

 
  })








app.post("/api/users/login", async(req, res) => {

    const {email , password} = req.body

    try {
        
        const user = await User.findAll({where:{email:email,password:password}})

        if(user.length > 0)
        {
            const currentUser = {
                name : user[0].name , 
                email : user[0].email, 
                isAdmin : user[0].isAdmin, 
                id : user[0].id
            }
            res.send(currentUser);
        }
        else{
            return res.status(400).json({ message: 'User Login Failed' });
        }

    } catch (error) {
           return res.status(400).json({ message: 'Something went weong' });
    }
  
});

}