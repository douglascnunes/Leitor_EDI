const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Olá, mundo!');
  });


const PORT = process.env.PORT || 3000; // Define a porta do servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escutando na porta ${PORT}`);
});
