module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('estoque', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nomeProduto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantidadeEstoque: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      quantidadeMin: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      quantidadeMax: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('estoque');
  },
};
