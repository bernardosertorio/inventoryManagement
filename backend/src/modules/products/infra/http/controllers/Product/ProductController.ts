import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProductService from '../../../services/CreateProductService';

export default class ProductController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { category_id } = request.params;
    const { title, availability, description, price } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      category_id,
      title,
      availability,
      description,
      price,
    });

    return response.json(product);
  }
}
