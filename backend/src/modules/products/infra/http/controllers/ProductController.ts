import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProductService from '../../../services/CreateProductService';

export default class ProductController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { category } = request.params;
    const { id, title, availability, description, price, sku } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      category,
      id,
      title,
      availability,
      description,
      price,
      sku,
    });

    return response.json(product);
  }
}
