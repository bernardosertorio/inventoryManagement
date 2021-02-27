import { Request, Response } from 'express';
import { container } from 'tsyringe';

import getCategoriesService from '';

export default class getCategoriesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const getCategoryWithName = container.resolve(getCategoriesService);

    const getCategory = await getCategoryWithName.execute({
      name,
    });

    return response.json(getCategory);
  }
}
