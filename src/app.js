/**
 * Arquivo: app.js
 * Descrição: Arquivo responsável por toda a configuração e execução da aplicação.
 * Data:02/07/2021
 * Autor: coder-samuel
 */

const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API
const index = require('./routes/index');
const servicoRoute = require('./routes/servico.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', servicoRoute);

module.exports = app;
