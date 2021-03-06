const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dietas', {
    name: {
      type: DataTypes.STRING
      // type: DataTypes.ENUM("Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian",
      //    "Vegan", "Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30")
    },
  }, {timestamps: false});
};

// ID
// Nombre