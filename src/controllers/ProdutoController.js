const Produto = require('../models/Produto');

class ProdutoController {
  // Criar um produto
  async create(req, res) {
    try {
      const produto = await Produto.create(req.body);
      res.status(201).json(produto);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar produto' });
    }
  }

  // Lista todos os clientes
  async listAll(_req, res) {
    try {
      const produto = await Produto.findAll();
      return res.status(200).json(produto);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar os Produtos' });
    }
  }

  // Atualizar um produto
  async update(req, res) {
    const { id } = req.params;
    const {
      nomeProduto, descricao, categoria, preco,
    } = req.body;
    try {
      const produto = await Produto.findByPk(id);
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }

      await produto.update({
        nomeProduto, descricao, categoria, preco,
      });
      return res.json(produto);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
  }

  // Deletar um produto
  async delete(req, res) {
    const { id } = req.params;
    try {
      const produto = await Produto.findByPk(id);
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }

      await produto.destroy();
      return res.json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar produto' });
    }
  }
}

module.exports = new ProdutoController();
