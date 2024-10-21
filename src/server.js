const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const categoryRoutes = require('./routes/categoryRoutes');
const newsRoutes = require('./routes/newsRoutes');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch(error => console.log(error));

// Usar las rutas
app.use('/categories', categoryRoutes);
app.use('/news', newsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
