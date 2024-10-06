/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('itemvenda', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      valorUnitario: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      valorTotal: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0, // Calculado com base na quantidade * valorUnitario

      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('itemvenda');
  },
};
