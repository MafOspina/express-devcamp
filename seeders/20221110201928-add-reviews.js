'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [
      {
       title: 'Satisfecho',
       text: 'Realicé el curso de calculo inregral y fue una muy buena especiencia',
       rating: '3.8',
       bootcamp_id: '1',
       user_id: '1'
      },
      {
       title: 'Insatisfecho',
       text: 'Realicé el curso de calculo diferencial y fue una muy mala experiencia',
       rating: '2.0',
       bootcamp_id: '2',
       user_id: '2'
       }
    
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};
