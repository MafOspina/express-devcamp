'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //addColum:argumentosd
    //1. nombre de tabla donde poner la columna
    //2.nombre de la nueva columna
    //3.opciones de configuración
    await queryInterface.addColumn('bootcamps', 'user_id', {
      type:Sequelize.INTEGER,
      references:{
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('bootcamps', 'user_id')
  }
};
