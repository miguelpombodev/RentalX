import express from 'express';
import categoriesRoutes from './routes/categories.route';
import specificationsRoutes from './routes/specifications.route';

const server = express();

server.use(express.json());
server.use('/categories', categoriesRoutes);
server.use('/specification', specificationsRoutes);

server.listen(3000);
