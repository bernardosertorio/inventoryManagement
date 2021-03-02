import { Request, Response } from 'express';
import { container } from 'tsyringe';

import getSkuService from '../../../services/GetSkuService';

export default class getSkuController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { sku_id } = request.params;

    const getSku = container.resolve(getSkuService);

    const sku = await getSku.execute({
      sku_id,
    });

    return response.json(sku);
  }
}
