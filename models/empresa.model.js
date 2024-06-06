"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Empresa = sequelize.define(
    "Empresa",
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
      direccion: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      info_contacto: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: "empresas",
    }
  );

  Empresa.getEmpresas = async (params) => {
    const query = `SELECT * FROM empresas WHERE nombre LIKE :nombre`;
    return await sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: { nombre: `%${params.nombre}%` },
    });
  };

  Empresa.associate = function (models) {
    // Define associations here. For example:
    // Empresa.hasMany(models.AlgunaOtraTabla, {
    //   foreignKey: "fk_empresa",
    //   as: "otrasTablas",
    // });
  };

  return Empresa;
};
