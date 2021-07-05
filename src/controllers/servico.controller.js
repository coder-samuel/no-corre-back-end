/**
 * Arquivo: src/controllers/servico.controllers.js
 * Descrição: arquivo responsável pela lógica do CRUD da API 'No Corre'.
 * Data: 02/07/2021
 * Autor: coder-samuel
 */

const db = require('../config/database');

// ==> Método responsável por criar um novo 'Servico'
exports.createServico = async(req, res) => {
  const { titulo, profissional, valorHora, qtdeHoras, custoMedio, imagem } = req.body;
  const response = await db.query (
    'INSERT INTO servico (titulo, profissional, valorHora, qtdeHoras, custoMedio, imagem) VALUES ($1, $2, $3, $4, $5, $6)',
    [titulo, profissional, valorHora, qtdeHoras, custoMedio, imagem]
  );

  res.status(201).send({
    message: 'Serviço adicionado ao catálogo com sucesso! :)',
    body: {
      servico: {titulo, profissional, valorHora, qtdeHoras, custoMedio, imagem}
    },
  });
};

//==> Metodo responsável por selecionar todos os 'Serviços'
exports.listAllServicos = async(req, res) => {
  const response = await db.query('SELECT * FROM servico ORDER BY titulo ASC');
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Servico' pelo 'Id'
exports.findServicoById = async(req, res) => {
  const servicoId = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM servico WHERE servicoId = $1', [servicoId]);
  res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar 'Servico' pelo 'Id'
exports.updateServicoById = async (req, res) => {
  const servicoId = parseInt(req.params.id);
  const {titulo, profissional, valorHora, qtdeHoras, custoMedio, imagem } = req.body;

  const response = await db.query(
    "UPDATE servico SET titulo = $1, profissonal = $2, valorHora = $3, qtdeHoras = $4, custoMedio = $5, imagem = $6 WHERE servicoId = $7",
    [titulo, profissional, valorHora, qtdeHoras, custoMedio, imagem, servicoId]
  );

  res.status(200).send({ message: "Publicação Atualizada com sucesso!" });
};

exports.deleteServicoById = async (req, res) => {
  const ID_servico = parseInt(req.params.id);
  await db.query('DELETE FROM servico WHERE servicoId = $1', [servicoId]);

  res.status(200).send({ message: 'Publicação deletada com sucesso!', servicoId });
};