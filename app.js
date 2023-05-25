// https para conexão da api
const express = require('express');
const app = express();
const port = 3000; // defina a porta que deseja usar para o servidor

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// pegar o cliente
const mysql = require('mysql2');

// criar a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '#T3cnol0g1@',
  database: 'recitur_db'
});

// teste para conexão com banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados MySQL');
});

// Middleware para processar solicitações JSON
app.use(express.json());

// Rota para registro de usuário
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  connection.query('INSERT INTO user_tbl (user_name, user_email, user_password) VALUES (?, ?, ?)', [name, email, password], (err, result) => {
    if (err) {
      console.error('Erro ao registrar usuário:', err);
      res.status(500).json({ error: 'Erro ao registrar usuário' });
      return;
    }
    // Redirecionar para a página 4 após o registro bem-sucedido
    res.redirect('/page4');
  });
});

// Rota para login de usuário
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  connection.query('SELECT * FROM user_tbl WHERE user_email = ? AND user_password = ?', [email, password], (err, results) => {
    if (err) {
      console.error('Erro ao realizar login:', err);
      res.status(500).json({ error: 'Erro ao realizar login' });
      return;
    }
    if (results.length === 0) {
      // Usuário não encontrado ou credenciais inválidas
      res.status(401).json({ error: 'Email ou senha inválidos' });
      return;
    }
    // Redirecionar para a página 4 após o login bem-sucedido
    res.redirect('/page4');
  });
});
