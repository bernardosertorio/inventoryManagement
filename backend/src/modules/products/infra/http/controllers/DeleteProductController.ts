import { Request, Response } from 'express';
import { container } from 'tsyringe';

import deleteProductService from '../../../services/DeleteProductService';

export default class deleteProductController {
  public async delete(request: Request, response: Response): Promise<Response> {
    const { product_id } = request.params;

    const deleteProduct = container.resolve(deleteProductService);

    const product = await deleteProduct.execute({
      product_id,
    });

    return response.json(product);
  }
}
