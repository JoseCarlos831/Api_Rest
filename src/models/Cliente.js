import Sequelize, { Model } from 'sequelize';

export default class Cliente extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      cpf: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 14],
            msg: 'cpf precisa ter entre 3 e 14 caracteres.',
          },
        },
      },
      endereco: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'endereco precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      telefone: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'telefone precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      historicoPedidos: {
        type: Sequelize.JSON,
        defaultValue: [],
        validate: {
          isArray(value) {
            if (!Array.isArray(value)) {
              throw new Error('historicoPedidos precisa ser um array.');
            }
          },
          minItems(value) {
            if (value.length < 3) {
              throw new Error('historicoPedidos precisa ter pelo menos 3 itens.');
            }
          },
          maxItems(value) {
            if (value.length > 255) {
              throw new Error('historicoPedidos não pode ter mais de 255 itens.');
            }
          },
        },
      },
      infoEnvio: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'As informaçoes do Envio precisam ter entre 3 e 255 caracteres.',
          },
        },
      },
    }, {
      sequelize,
    // eslint-disable-next-line function-paren-newline
    });
    return this;
  }
}
