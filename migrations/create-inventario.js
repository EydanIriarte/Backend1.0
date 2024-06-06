'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('inventario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_producto: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      cantidad:{
        allowNull:false,
        type: Sequelize.INTEGER
      },
      fecha:{
        allowNull:false,
        type: Sequelize.DATE

      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('inventario');
  }
};