/**
 * Arquivo: server.js
 * Descrição: Arquivo responsável por toda a configuração e execução da aplicação.
 * Data: 02/07/2021
 * Autor: coder-samuel
 */

const app = require('./src/app');
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to samuel application." });
});

app.listen(port, () => {
  console.log('Aplicação executando na porta ', port);
});

