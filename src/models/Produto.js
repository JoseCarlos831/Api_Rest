import Sequelize, { Model } from 'sequelize';

export default class Produto extends Model {
  static init(sequelize) {
    super.init({
      nomeProduto: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome do produto precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      descriçao: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'A descriçao precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      categoria: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 100],
            msg: 'A Categoria precisa ter entre 3 e 100 caracteres.',
          },
        },
      },
      preco: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Preço precisa ser um número inteiro ou de ponto flutuante',
          },
        },
      },
      codigo: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Codigo precisa ser um número inteiro',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
