import { Router } from 'express';
import CategoriesRepository from '../repositories/CategoriesRepository';
import CreateCategoryService from '../services/CategoriesServices';

const categoriesRoutes = Router();
const _repository = new CategoriesRepository();

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(_repository);
  createCategoryService.execute({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get('/', (req, res) => {
  const categoriesList = _repository.listAll();

  return res.json(categoriesList);
});

export default categoriesRoutes;
