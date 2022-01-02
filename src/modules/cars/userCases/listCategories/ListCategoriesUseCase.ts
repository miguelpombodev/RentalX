import Category from '../../models/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private readonly _repository: ICategoriesRepository) {}

  execute(): Category[] {
    const categoriesList = this._repository.listAll();

    return categoriesList;
  }
}

export default ListCategoriesUseCase;
