import { Request, Response } from 'express';
import { container } from 'tsyringe';

import getCategoryService from '../../../services/GetCategoryService';

export default class getCategoryController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { category_id } = request.params;

    const getCategory = container.resolve(getCategoryService);

    const category = await getCategory.execute({
      category_id,
    });

    return response.json(category);
  }
}
