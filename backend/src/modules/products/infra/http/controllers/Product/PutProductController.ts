import { Request, Response } from 'express';
import { container } from 'tsyringe';

import putProductService from '../../../../services/Product/PutProductService';

export default class putProductController {
  public async put(request: Request, response: Response): Promise<Response> {
    const { product_id } = request.params;

    const { title, availability, description, price } = request.body;

    const putProduct = container.resolve(putProductService);

    const product = await putProduct.execute({
      product_id,
      title,
      availability,
      description,
      price,
    });

    return response.json(product);
  }
}
