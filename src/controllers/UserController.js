import Usuario from '../models/Usuario';

class UsuarioController {
  // Cria um novo usuário
  async create(req, res) {
    try {
      const { email, senha } = req.body;

      // Criando um novo usuário
      const usuario = await Usuario.create({ email, senha });

      return res.status(201).json({
        success: true,
        message: 'Usuário criado com sucesso!',
        usuario: {
          id: usuario.id,
          email: usuario.email,
        },
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: 'Erro ao criar usuário',
        details: error.message,
      });
    }
  }

  // Lista todos os usuários
  async listAll(req, res) {
    try {
      const usuarios = await Usuario.findAll({
        attributes: ['id', 'email'], // Retorna apenas o id e email
      });
      return res.status(200).json(usuarios);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar usuários' });
    }
  }

  // Função de login
  async login(req, res) {
    try {
      const { email, senha } = req.body;

      const usuario = await Usuario.findOne({ where: { email } });
      if (!usuario || !(await usuario.checkPassword(senha))) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      return res.status(200).json({
        success: true,
        message: 'Login realizado com sucesso!',
        usuario: {
          id: usuario.id,
          email: usuario.email,
        },
      });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao realizar login', details: error.message });
    }
  }
}

export default new UsuarioController();
