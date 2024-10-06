const { Sequelize } = require('sequelize');
const databaseConfig = require('../../config/database');
const Produto = require('../../models/Produto');
const Cliente = require('../../models/Cliente');
const Venda = require('../../models/Venda');
const Estoque = require('../../models/Estoque');
const ItemVenda = require('../../models/ItemVenda');

const models = [Produto, Cliente, Venda, Estoque, ItemVenda];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
