'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bootcamps', [
      {
       name: 'Calculo integral-1',
       description: 'En este curso aprenderas las bases del cálculo integral',
       website: 'calculo.com',
       phone: '31232522524',
       average_rating: '4',
      average_cost: '100000',
      user_id:'1'
      },
      {
        name: 'Calculo diferencial-1',
        description: 'En este curso aprenderas las bases del cálculo diferencial',
        website: 'calculo.com',
        phone: '31232522524',
        average_rating: '3',
       average_cost: '150000',
       user_id:'2'
       }
    
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bootcamps', null, {});
  }
};
