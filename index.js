const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 5000;


app.use(express.static(path.join(__dirname, '/')));
// Middleware
app.use(cors());
app.use(express.json());

// Тестовый роут
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});
app.post('/api/submit', (req, res) => {
    const { name } = req.body;
    res.json({ status: 'Success', receivedName: name });
  });
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});