module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Cities', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Cities', 'name', {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
    });
  },
};
