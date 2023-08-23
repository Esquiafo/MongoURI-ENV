import express from 'express';
import runDB from './services/mongoNode.js'
const app = express();

// Configurar middleware para servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static('public'));

app.get('/', (req, res) => {

  //Corremos el script para que inicie la prueba de la DB
  runDB()
  
  res.send("");
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));