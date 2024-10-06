import express from 'express';
import EstoqueController from '../controllers/EstoqueController';

const router = express.Router();

router.get('/estoque', EstoqueController.listAll);
router.post('/estoque/entrada', EstoqueController.registrarEntrada);
router.post('/estoque/saida', EstoqueController.registrarSaida);

export default router;
