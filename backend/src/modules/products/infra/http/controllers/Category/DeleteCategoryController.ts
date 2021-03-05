import { Request, Response } from 'express';
import { container } from 'tsyringe';

import deleteCategoryService from '../../../../services/Category/DeleteCategoryService';

export default class deleteCategoryController {
  public async delete(request: Request, response: Response): Promise<Response> {
    const { category_id } = request.params;

    const deleteCategory = container.resolve(deleteCategoryService);

    const category = await deleteCategory.execute({ category_id });

    return response.json(category);
  }
}
