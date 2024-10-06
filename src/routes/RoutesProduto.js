import express from 'express';
import ProdutoController from '../controllers/ProdutoController';

const router = express.Router();

console.log('Produto Routes Loaded');

router.get('/produtos', ProdutoController.listAll);
router.post('/produtos', ProdutoController.create);
router.put('/produtos/:id', ProdutoController.update);
router.delete('/produtos/:id', ProdutoController.delete);

export default router;
