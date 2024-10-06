import express from 'express';
import VendaController from '../controllers/VendaController';

const router = express.Router();

router.get('/vendas', VendaController.listAll);
router.post('/vendas', VendaController.create);
router.put('/vendas/:id', VendaController.update);
router.delete('/vendas/:id', VendaController.delete);

export default router;
