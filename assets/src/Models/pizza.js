module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Pizza', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
       
      },
      varients: {
        type: DataTypes.STRING
      },
      prices: {
        type: DataTypes.STRING
      },
      category: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      }
    
    })
  }