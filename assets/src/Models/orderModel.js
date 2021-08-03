module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Order', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
       
      },
      email: {
        type: DataTypes.STRING
      },
      userid: {
        type: DataTypes.STRING
      },
      orderItems: {
         type: DataTypes.JSON
      },
      orderAmount: {
        type: DataTypes.STRING   
      },
      isDelivered: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      
      },{
    timestamps: true,
    createdAt: 'created',
    updatedAt: false
  })
  }