import { Router } from 'express';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';
import ModelsController from '../controllers/ModelsController';

const modelController = new ModelsController();

const modelRoutes = Router();

modelRoutes.use(ensureAuthenticated);

modelRoutes.post('/', modelController.create);

modelRoutes.get('/', modelController.index);

modelRoutes.put('/:code', modelController.update);

modelRoutes.delete('/:code', modelController.delete);

export default modelRoutes;
