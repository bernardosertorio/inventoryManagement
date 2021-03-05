import { Request, Response } from 'express';
import { container } from 'tsyringe';

import putCategoryService from '../../../../services/Category/PutCategoryService';

export default class putCategoryController {
  public async put(request: Request, response: Response): Promise<Response> {
    const { category_id } = request.params;

    const { name } = request.body;

    const putCategory = container.resolve(putCategoryService);

    const category = await putCategory.execute({
      category_id,
      name,
    });

    return response.json(category);
  }
}
