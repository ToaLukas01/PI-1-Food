const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diets', {
    id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true
    },
    name: {
      type: DataTypes.ENUM("Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian",
         "Vegan", "Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30")
    },
  }, {timestamps: false});
};

// ID
// Nombre