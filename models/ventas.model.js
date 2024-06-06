"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Venta = sequelize.define(
    "Venta",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fk_empresa: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      fk_producto: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      cantidad: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      precio: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
    },
    {
      timestamps: false,
      tableName: "ventas",
    }
  );

  Venta.getVentas = async (params) => {
    const query = ``; // Aquí puedes definir tu consulta personalizada
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  Venta.associate = function (models) {
    // Aquí puedes definir las asociaciones con otros modelos
    // Ejemplo:
    // Venta.belongsTo(models.Empresa, {
    //   foreignKey: "fk_empresa",
    //   as: "empresa",
    // });
    // Venta.belongsTo(models.Producto, {
    //   foreignKey: "fk_producto",
    //   as: "producto",
    // });
  };

  return Venta;
};