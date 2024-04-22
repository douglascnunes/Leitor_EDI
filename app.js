// --------------- Importações ---------------
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const Sequelize = require('sequelize');


const app = express();



// --------------- Confiurações ---------------

  // MySQL
  const sequelize = new Sequelize('leitor_edi_test1', 'root', 'xxk2711nes', {
    host: "localhost",
    dialect: 'mysql'
  })
    // Verificar conexão
    sequelize.authenticate().then(function(){
      console.log("Conectado com sucesso!")
    }).catch(function(erro){
      console.log("Falha ao se conectar: "+erro)
    })
   
  // Handlebards
  app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
      runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
      },
    layoutsDir: 'views/layouts/',
  }));
  app.set('view engine', 'handlebars');

  
  
// --------------- Middlewares ---------------

  // JSON
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  // Pasta Public
  app.use(express.static(path.join(__dirname, 'public')))
  app.use('/img', express.static(path.join(__dirname, '/public/img')))
  


// --------------- ROTAS ---------------

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
  });



// --------------- Listen ---------------

const PORT = process.env.PORT || 3000; // Define a porta do servidor
app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});