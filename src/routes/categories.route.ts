import { Router } from 'express';
import CategoriesRepositories from '../repositories/CategoriesRepositories';
import CreateCategoryService from '../services/CategoriesServices';

const categoriesRoutes = Router();
const _repository = new CategoriesRepositories();

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
