'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      direccion:{
        type: Sequelize.STRING
      },
      info_contacto:{
        type: Sequelize.STRING

      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('empresas');
  }
};