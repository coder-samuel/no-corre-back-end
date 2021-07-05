/**
 * Arquivo: src/routes/index.js
 * Descrição: Arquivo responsável pela chamada da(s) API's da aplicação
 * Data: 02/07/2021
 * Autor: corder-samuel
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vinde a API Node.js + PostgreSQL + Azure!',
    version: '1.0.0'
  })
});

module.exports = router;