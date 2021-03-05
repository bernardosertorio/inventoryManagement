import { Request, Response } from 'express';
import { container } from 'tsyringe';

import getSkusInProductService from '../../../../services/Product/GetSkusInProductService';

export default class getSkusInProductController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { product_id } = request.params;

    const getSkusInProduct = container.resolve(getSkusInProductService);

    const skusInProduct = await getSkusInProduct.execute({
      product_id,
    });

    return response.json(skusInProduct);
  }
}
