import SpecificationsRepository from '../../repositories/implementations/SpecificationsRepository';
import CreateSpecifiationController from './createSpecificationController';
import CreateSpecificationUseCase from './CreateSpecificationUseCase';

const specificationsRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);
const createSpecifiationController = new CreateSpecifiationController(
  createSpecificationUseCase
);

export { createSpecifiationController };
