import casaRoutes from './index.js';
import personasRoutes from './personas.routes.js';

export default function rutas(app) {
  app.use('/casa', casaRoutes);
  app.use('/personas', personasRoutes);
}
