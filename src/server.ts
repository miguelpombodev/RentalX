import express from 'express';
import categoriesRoutes from './routes/categories.route';

const server = express();

server.use(express.json());
server.use('/categories', categoriesRoutes);

server.listen(3000);
