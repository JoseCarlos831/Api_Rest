const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check } = require('express-validator');
const Usuario = require('../models/Usuario');

const router = express.Router();

router.post(
  '/register',
  [
    check('email', 'Por favor insira um email válido').isEmail(),
    check('password', 'Senha é obrigatória').exists(),
  ],
  async (req, res) => {
    const { email, password } = req.body;

    try {
      const usuario = await Usuario.findOne({ where: { email } });
      if (!usuario) {
        return res.status(400).json({ msg: 'Usuário não encontrado' });
      }

      const isMatch = await bcrypt.compare(password, usuario.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Senha inválida' });
      }

      const payload = {
        user: {
          id: usuario.id,
        },
      };

      return jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '1h' },
        (err, token) => {
          if (err) {
            throw err;
          }
          return res.json({ token });
        },
      );
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Erro no servidor');
    }
  },
);

module.exports = router;
