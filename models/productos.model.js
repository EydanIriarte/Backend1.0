"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define(
    "Producto",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      descripcion: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      precio: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      stock: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: true,
      tableName: "productos",
    }
  );

  Producto.getProductos = async (params) => {
    const query = `SELECT * FROM productos WHERE nombre LIKE :nombre`;
    return await sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: { nombre: `%${params.nombre}%` },
    });
  };

  Producto.associate = function (models) {
    // Define associations here. For example:
    // Producto.belongsTo(models.Categoria, {
    //   foreignKey: "fk_categoria",
    //   as: "categoria",
    // });
  };

  return Producto;
};
