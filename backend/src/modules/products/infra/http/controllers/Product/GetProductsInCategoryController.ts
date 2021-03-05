import { Request, Response } from 'express';
import { container } from 'tsyringe';

import getProductsInCategoryService from '../../../../services/Product/GetProductsInCategoryService';

export default class getProductsInCategoryController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { category_id } = request.params;

    const getProductsInCategory = container.resolve(
      getProductsInCategoryService,
    );

    const productsInCategory = await getProductsInCategory.execute({
      category_id,
    });

    return response.json(productsInCategory);
  }
}
