import { Router } from 'express';
import { createCategoryController } from '../modules/cars/userCases/createCategory';
import { listCategoriesController } from '../modules/cars/userCases/listCategories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) =>
  createCategoryController.handle(request, response)
);

categoriesRoutes.get('/', (request, response) => {
  listCategoriesController.handle(request, response);
});

export default categoriesRoutes;
