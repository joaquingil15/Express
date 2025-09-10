import { Router } from 'express';

const router = Router();

// GET /personas
router.get('/', (req, res) => {
  res.json({ mensaje: 'Esta es la ruta GET de mi entidad PERSONAS' });
});

// GET /personas/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ mensaje: `Esta es la ruta GET de mi entidad PERSONAS con el ID ${id}` });
});

// POST /personas
router.post('/', (req, res) => {
  res.json({ mensaje: 'Esta es la ruta POST de mi entidad PERSONAS' });
});

// PUT /personas/:id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ mensaje: `Esta es la ruta PUT de mi entidad PERSONAS con el ID ${id}` });
});

// DELETE /personas/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ mensaje: `Esta es la ruta DELETE de mi entidad PERSONAS con el ID ${id}` });
});

export default router;
