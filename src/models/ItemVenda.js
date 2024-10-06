import Sequelize, { Model } from 'sequelize';

export default class ItemVenda extends Model {
  static init(sequelize) {
    super.init({
      quantidade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'A Qauntidade precisa ser um número inteiro',
          },
        },
      },
      valorUnitario: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'O Valor Unitario precisa ser um número inteiro ou de ponto flutuante',
          },
        },
      },
      valorTotal: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: {
            msg: 'O Valor Total precisa ser um número inteiro ou de ponto flutuante',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
