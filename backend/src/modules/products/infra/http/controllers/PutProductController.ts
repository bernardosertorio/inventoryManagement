import { Request, Response } from 'express';
import { container } from 'tsyringe';

import putProductsService from '../../../services/PutProductService';

export default class putProductController {
  public async put(request: Request, response: Response): Promise<Response> {
    const { product_id } = request.params;

    const { title, availability, description, price } = request.body;

    const putProduct = container.resolve(putProductsService);

    const productsInCategory = await putProduct.execute({
      product_id,
      title,
      availability,
      description,
      price,
    });

    return response.json(productsInCategory);
  }
}
