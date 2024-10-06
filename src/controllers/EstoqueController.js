import Estoque from '../models/Estoque';
import Produto from '../models/Produto';

class EstoqueController {
  // Listar todos os itens do estoque
  async listAll(req, res) {
    try {
      const estoques = await Estoque.findAll({ include: Produto });
      res.json(estoques);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar estoque' });
    }
  }

  // Registrar entrada no estoque
  async registrarEntrada(req, res) {
    const { produtoId, quantidade } = req.body;
    try {
      const estoque = await Estoque.findOne({ where: { produtoId } });
      if (!estoque) return res.status(404).json({ error: 'Estoque não encontrado' });

      estoque.quantidadeEstoque += quantidade;
      await estoque.save();

      return res.json(estoque);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao registrar entrada no estoque' });
    }
  }

  // Registrar saída do estoque
  async registrarSaida(req, res) {
    const { produtoId, quantidade } = req.body;
    try {
      const estoque = await Estoque.findOne({ where: { produtoId } });
      if (!estoque) return res.status(404).json({ error: 'Estoque não encontrado' });

      if (estoque.quantidadeEstoque < quantidade) {
        return res.status(400).json({ error: 'Quantidade insuficiente no estoque' });
      }

      estoque.quantidadeEstoque -= quantidade;
      await estoque.save();

      return res.json(estoque);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao registrar saída no estoque' });
    }
  }
}

export default new EstoqueController();
