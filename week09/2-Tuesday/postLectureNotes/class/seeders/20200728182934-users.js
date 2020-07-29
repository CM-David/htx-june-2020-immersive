'use strict';

// const { ne } = require("sequelize/types/lib/operators");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      // Add seed commands here.
     
      // Example:
      await queryInterface.bulkInsert('users', [{
        firstname: 'John',
        lastname: 'Doe',
        email: 'j@Dc.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'chris',
        lastname: 'Doe',
        email: 'c@Dc.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'Mike',
        lastname: 'Doe',
        email: '@Dc.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
