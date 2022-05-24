const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resumen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    puntuacion: {
      type: DataTypes.INTEGER
    },
    nivel: {
      type: DataTypes.INTEGER
    },
    pasos: {
      type: DataTypes.TEXT
    }
  }, {timestamps: false});
};

// ID: *
// Nombre *
// Resumen del plato *
// Puntuación
// Nivel de "comida saludable"
// Paso a paso
