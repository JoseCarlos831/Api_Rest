import express from 'express';
import UsuarioController from '../controllers/UserController';

const router = express.Router();

router.get('/usuarios', UsuarioController.listAll);
router.post('/usuarios', UsuarioController.create);
router.post('/login', UsuarioController.login);

export default router;
