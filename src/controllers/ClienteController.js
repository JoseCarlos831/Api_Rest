import Cliente from '../models/Cliente';

class ClienteController {
  // Cria um novo cliente
  async create(req, res) {
    try {
      const cliente = await Cliente.create(req.body);
      return res.status(201).json(cliente);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar cliente', details: error.message });
    }
  }

  // Lista todos os clientes
  async listAll(_req, res) {
    try {
      const clientes = await Cliente.findAll();
      return res.status(200).json(clientes);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar clientes' });
    }
  }

  // Atualiza um cliente existente
  async update(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }

      const updatedCliente = await cliente.update(req.body);
      return res.status(200).json(updatedCliente);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar cliente' });
    }
  }

  // Deleta um cliente
  async delete(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }

      await cliente.destroy();
      return res.status(200).json({ message: 'Cliente deletado com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar cliente' });
    }
  }
}

export default new ClienteController();
