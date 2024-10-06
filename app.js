import express from 'express';
import dotenv from 'dotenv';

// Importando as rotas
import clienteRoutes from './src/routes/RoutesCliente';
import produtoRoutes from './src/routes/RoutesProduto';
import vendaRoutes from './src/routes/RoutesVenda';
import itemVendaRoutes from './src/routes/RoutesItemVenda';
import homeRoutes from './src/routes/homeRoutes';
import RoutesUser from './src/routes/RoutesUser';

const registerRoute = require('./src/routes/Register');

// Configurando variáveis de ambiente
dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Middleware para aceitar JSON e dados via URL-encoded
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    // Definindo as rotas da aplicação
    this.app.use('/', homeRoutes);
    this.app.use('/api/clientes', clienteRoutes);
    this.app.use('/api/produtos', produtoRoutes);
    this.app.use('/api/vendas', vendaRoutes);
    this.app.use('/api/itens-venda', itemVendaRoutes);
    this.app.use('/api/usuarios', RoutesUser);
    this.app.use('/register', registerRoute);
  }
}

export default new App().app;
