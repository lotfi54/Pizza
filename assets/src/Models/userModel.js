module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      confirmationCode: { 
    type: DataTypes.STRING,
       },
        status: {
      type: DataTypes.ENUM,
     values: ['Pending', 'Active'],
      defaultValue: 'Pending'
    },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    })
  }