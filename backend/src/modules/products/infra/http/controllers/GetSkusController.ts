import { Request, Response } from 'express';
import { container } from 'tsyringe';

import getSkusService from '../../../services/GetSkusService';

export default class getSkusController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { sku_id } = request.params;

    const getSkus = container.resolve(getSkusService);

    const skus = await getSkus.execute({
      sku_id,
    });

    return response.json(skus);
  }
}
