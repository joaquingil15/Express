import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
  res.json({ mensaje: 'Bienvenido a la API de PDI' });
});

// Rutas para la entidad CASA
app.get('/casa', (req, res) => {
  res.json({ mensaje: 'Esta es la ruta GET de mi entidad CASA' });
});

app.post('/casa', (req, res) => {
  res.json({ mensaje: 'Esta es la ruta POST de mi entidad CASA' });
});

app.put('/casa', (req, res) => {
  res.json({ mensaje: 'Esta es la ruta PUT de mi entidad CASA' });
});

app.delete('/casa', (req, res) => {
  res.json({ mensaje: 'Esta es la ruta DELETE de mi entidad CASA' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
