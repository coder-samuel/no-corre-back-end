/**
 * Arquivo: src/routes/product.routes.js
 * Descrição: Arquivo responsável pelas rotas da api relacionado a classe 'Servico'.
 * Data: 02/07/2021
 * Autor: coder-samuel
 */

const router = require('express-promise-router')();
const servicoController = require('../controllers/servico.controller');

//==> Definindo as rotas do CRUD - 'Serviço'

// ==> Rota responsável por criar um novo 'Serviço': (POST): localhost:3000/api/cadastro
router.post('/cadastro', servicoController.createServico);

// ==> Rota responsável por selecionar todos os 'Serviços': (GET): localhost:3000/api/cadastro
router.get('/cadastro', servicoController.listAllServicos)

// => Rota responsável por selecionar 'Serviço' pelo 'Id': (GET): localhost:3000/api/cadastro/:id
router.get('/cadastro/:id', servicoController.findServicoById);

// ==> Rota responsável por atualizar 'Serviço' pelo 'Id': (GET): localhost:3000/api/cadastro/:id
router.put('/cadastro/:id', servicoController.updateServicoById);

// ==> Rota responsável por excluir 'Serviço' pelo 'Id': (GET): localhost:3000/api/cadastro/:id
router.delete('/cadastro/:id', servicoController.deleteServicoById);

module.exports = router;