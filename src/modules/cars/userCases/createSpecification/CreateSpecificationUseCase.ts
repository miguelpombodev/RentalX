import SpecificationsRepository from '../../repositories/implementations/SpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private readonly _repository: SpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const specAlreadyExists = this._repository.findByName(name);

    if (specAlreadyExists) {
      throw new Error('Specification already exists');
    }

    this._repository.create({
      name,
      description,
    });
  }
}

export default CreateSpecificationUseCase;
