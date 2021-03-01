import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCategoryService from '../../../services/CreateCategoryService';

export default class CategoryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, availability } = request.body;

    const createCategory = container.resolve(CreateCategoryService);

    const category = await createCategory.execute({
      name,
      availability,
    });

    return response.json(category);
  }
}
