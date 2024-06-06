"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Inventario = sequelize.define(
    "Inventario",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      fecha: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false,
      tableName: "inventario",
    }
  );

  Inventario.getInventarios = async (params) => {
    const query = ``; // Aquí puedes definir tu consulta personalizada
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  Inventario.associate = function (models) {
    // Aquí puedes definir las asociaciones con otros modelos
    // Ejemplo:
    // Inventario.belongsTo(models.Producto, {
    //   foreignKey: "fk_producto",
    //   as: "producto",
    // });
  };

  return Inventario;
};