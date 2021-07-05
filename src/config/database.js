/**
 * Arquivo: config/database.js
 * Descrição: Arquivo responsável pelas 'connectionStrings da aplicação: PostgreSQL.
 * Data: 02/07/2021
 * Autor: coder-samuel
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados (PostgreSQL)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};



