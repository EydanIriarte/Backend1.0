'use strict';

const { DataTypes } = require('sequelize');
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        allowNull:false,
        type:DataTypes.STRING,
      },
      descripcion:{
        allowNull:false,
        type: DataTypes.STRING,
      },
      precio:{
        allowNull:false,
        type: DataTypes.FLOAT,
      },
      stock: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('productos');
  }
};