'use strict';

const { DataTypes } = require('sequelize');
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};