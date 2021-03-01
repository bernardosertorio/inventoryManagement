import { Request, Response } from 'express';
import { container } from 'tsyringe';

import getCategoryService from '../../../services/GetCategoryService';

export default class getCategoriesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const getCategoryWithName = container.resolve(getCategoryService);

    const getCategory = await getCategoryWithName.execute({
      name,
    });

    return response.json(getCategory);
  }
}
