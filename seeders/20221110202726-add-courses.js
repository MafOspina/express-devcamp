'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [
      {
       title: 'calculo1',
       description: 'Curso de calculo 1',
       weeks: '5',
       enroll_cost: "200000",
       minimum_skill: "Principiante",
       bootcamp_id: '1'
      },
      {
        title: 'calculo2',
        description: 'Curso de calculo 2',
        weeks: '8',
        enroll_cost: "400000",
        minimum_skill: "Avanzado",
        bootcamp_id: '2'
       }
    
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
