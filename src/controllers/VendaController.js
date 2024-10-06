import Venda from '../models/Venda';
import Cliente from '../models/Cliente';

class VendaController {
  // Cria uma nova venda
  async create(req, res) {
    try {
      const { dataVenda, clienteId, valorTotal } = req.body;

      // Verificando se o cliente existe
      const cliente = await Cliente.findByPk(clienteId);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }

      const venda = await Venda.create({
        dataVenda,
        clienteId,
        valorTotal,
      });

      return res.status(201).json(venda);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar venda', details: error.message });
    }
  }

  // Lista todas as vendas
  async listAll(_req, res) {
    try {
      const vendas = await Venda.findAll({
        include: [{ model: Cliente, as: 'cliente' }],
      });
      return res.status(200).json(vendas);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar vendas' });
    }
  }

  // Atualiza uma venda existente
  async update(req, res) {
    try {
      const { id } = req.params;
      const venda = await Venda.findByPk(id);
      if (!venda) {
        return res.status(404).json({ error: 'Venda não encontrada' });
      }

      const { dataVenda, clienteId, valorTotal } = req.body;

      // Verificando se o cliente existe para a atualização
      const cliente = await Cliente.findByPk(clienteId);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }

      const updatedVenda = await venda.update({
        dataVenda,
        clienteId,
        valorTotal,
      });

      return res.status(200).json(updatedVenda);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar venda' });
    }
  }

  // Deleta uma venda
  async delete(req, res) {
    try {
      const { id } = req.params;
      const venda = await Venda.findByPk(id);
      if (!venda) {
        return res.status(404).json({ error: 'Venda não encontrada' });
      }

      await venda.destroy();
      return res.status(200).json({ message: 'Venda deletada com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar venda' });
    }
  }
}

export default new VendaController();
