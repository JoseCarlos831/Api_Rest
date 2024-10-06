import Sequelize, { Model } from 'sequelize';

export default class Estoque extends Model {
  static init(sequelize) {
    super.init({
      codigoEstoque: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'O Codigo precisa ser um número inteiro',
          },
        },
      },
      quantidadeEstoque: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'A quantidade precisa ser um número inteiro',
          },
        },
      },
      quantidadeMin: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'A quantidade precisa ser um número inteiro',
          },
        },
      },
      quantidadeMax: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'A quantidade precisa ser um número inteiro',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
