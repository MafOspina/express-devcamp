'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
      {
       username: 'John Doe',
       email: 'john@misena.edu.co',
       password: '1234'
      }, 
      {
      username: 'Jane Doe',
       email: 'jane@misena.edu.co',
       password: '1234'
      },
      {
      username: 'Rosa',
       email: 'rosa@misena.edu.co',
       password: '1234'
      }], {});
    

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('users', null, {});
  
  }
};
