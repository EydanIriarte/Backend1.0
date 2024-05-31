const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Venta = sequelize.define('Venta', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fk_empresa: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fk_producto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'ventas',
});

module.exports = Venta;
