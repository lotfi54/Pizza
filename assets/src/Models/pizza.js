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
        type: DataTypes.JSON
      },
      prices: {
        type: DataTypes.JSON
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