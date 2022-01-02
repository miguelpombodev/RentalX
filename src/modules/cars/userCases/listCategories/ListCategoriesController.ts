import { Request, Response } from 'express';

import ListCategoryUseCase from './ListCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const categoriesList = this.listCategoryUseCase.execute();

    return response.json(categoriesList);
  }
}

export default ListCategoriesController;
