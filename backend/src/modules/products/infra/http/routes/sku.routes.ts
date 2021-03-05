import { Router } from 'express';

import SkuController from '../controllers/Sku/SkuController';
import GetSkuController from '../controllers/Sku/GetSkuController';
import PutSkuController from '../controllers/Sku/PutSkuController';
import DeleteSkuController from '../controllers/Sku/DeleteSkuController';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';

const skuRouter = Router();

const skuController = new SkuController();
const getSkuController = new GetSkuController();
const putSkuController = new PutSkuController();
const deleteSkuController = new DeleteSkuController();

skuRouter.use(ensureAuthenticated);

skuRouter.post('/:product_id/sku', skuController.create);
skuRouter.get('/sku/:sku_id', getSkuController.index);
skuRouter.put('/sku/edit/:sku_id', putSkuController.put);
skuRouter.delete('/sku/delete/:sku_id', deleteSkuController.delete);

export default skuRouter;
