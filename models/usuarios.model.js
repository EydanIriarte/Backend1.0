"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
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
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      fk_empresa: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "empresas",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
      tableName: "usuarios",
    }
  );

  Usuario.getUsuarios = async (params) => {
    const query = `SELECT * FROM usuarios WHERE nombre LIKE :nombre`;
    return await sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: { nombre: `%${params.nombre}%` },
    });
  };

  Usuario.associate = function (models) {
    // Define associations here. For example:
    // Usuario.belongsTo(models.Empresa, {
    //   foreignKey: "fk_empresa",
    //   as: "empresa",
    // });
  };

  return Usuario;
};
