import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';

export default class Usuario extends Model {
  static init(sequelize) {
    super.init({
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
          msg: 'Este e-mail já está em uso.',
        },
        validate: {
          isEmail: {
            msg: 'O e-mail fornecido é inválido.',
          },
        },
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 100],
            msg: 'A senha deve ter entre 6 e 100 caracteres.',
          },
        },
      },
    }, {
      sequelize,
      hooks: {
        beforeSave: async (usuarioInstance) => {
          if (usuarioInstance.changed('senha')) {
            const hashedPassword = await bcrypt.hash(usuarioInstance.senha, 10);
            usuarioInstance.setDataValue('senha', hashedPassword);
          }
        },
      },
    });
    return this;
  }

  // Método para verificar a senha durante o login
  checkPassword(senha) {
    return bcrypt.compareSync(senha, this.senha);
  }
}
