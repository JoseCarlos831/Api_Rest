import express from 'express';
import ClienteController from '../controllers/ClienteController';

const router = express.Router();

router.get('/clientes', ClienteController.listAll);
router.post('/clientes', ClienteController.create);
router.put('/clientes/:id', ClienteController.update);
router.delete('/clientes/:id', ClienteController.delete);

export default router;
