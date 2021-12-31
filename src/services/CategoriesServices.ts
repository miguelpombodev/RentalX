import {} from 'express';
import CategoryRepository from '../repositories/CategoriesRepositories';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private readonly _repository: CategoryRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this._repository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }

    this._repository.create({ name, description });
  }
}

export default CreateCategoryService;