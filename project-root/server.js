import express from 'express';
import rutas from './routes/index.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'Bienvenido a la API de PDI' });
});

rutas(app);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
