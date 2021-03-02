import { Request, Response } from 'express';
import { container } from 'tsyringe';

import deleteProductsService from '../../../services/DeleteProductService';

export default class putProductController {
  public async delete(request: Request, response: Response): Promise<Response> {
    const { product_id } = request.params;

    const deleteProduct = container.resolve(deleteProductsService);

    const productsInCategory = await deleteProduct.execute({
      product_id,
    });

    return response.json(productsInCategory);
  }
}
