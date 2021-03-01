import { Request, Response } from 'express';
import { container } from 'tsyringe';

import getProductsService from '../../../services/GetProductService';

export default class getProductController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { product_id } = request.params;

    const getProduct = container.resolve(getProductsService);

    const productsInCategory = await getProduct.execute({
      product_id,
    });

    return response.json(productsInCategory);
  }
}
