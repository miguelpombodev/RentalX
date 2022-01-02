import { Router } from 'express';
import { createSpecifiationController } from '../modules/cars/userCases/createSpecification';

const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) =>
  createSpecifiationController.handle(request, response)
);

export default specificationRoutes;
