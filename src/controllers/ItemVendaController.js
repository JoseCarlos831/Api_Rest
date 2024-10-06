import ItemVenda from '../models/ItemVenda';
import Produto from '../models/Produto';// Assumindo que existe um relacionamento com o Produto

class ItemVendaController {
  // Cria um novo item de venda
  async create(req, res) {
    try {
      const { produtoId, quantidade, valorUnitario } = req.body;

      // Verificando se o produto existe
      const produto = await Produto.findByPk(produtoId);
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }

      const itemVenda = await ItemVenda.create({
        produtoId,
        quantidade,
        valorUnitario,
      });

      return res.status(201).json(itemVenda);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar item de venda', details: error.message });
    }
  }

  // Lista todos os itens de venda
  async listAll(_req, res) {
    try {
      const itensVenda = await ItemVenda.findAll({
        include: [{ model: Produto, as: 'produto' }],
      });
      return res.status(200).json(itensVenda);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar itens de venda' });
    }
  }

  // Atualiza um item de venda existente
  async update(req, res) {
    try {
      const { id } = req.params;
      const itemVenda = await ItemVenda.findByPk(id);
      if (!itemVenda) {
        return res.status(404).json({ error: 'Item de venda não encontrado' });
      }

      const { produtoId, quantidade, valorUnitario } = req.body;

      const updatedItemVenda = await itemVenda.update({
        produtoId,
        quantidade,
        valorUnitario,
      });

      return res.status(200).json(updatedItemVenda);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar item de venda' });
    }
  }

  // Deleta um item de venda
  async delete(req, res) {
    try {
      const { id } = req.params;
      const itemVenda = await ItemVenda.findByPk(id);
      if (!itemVenda) {
        return res.status(404).json({ error: 'Item de venda não encontrado' });
      }

      await itemVenda.destroy();
      return res.status(200).json({ message: 'Item de venda deletado com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar item de venda' });
    }
  }
}

export default new ItemVendaController();
