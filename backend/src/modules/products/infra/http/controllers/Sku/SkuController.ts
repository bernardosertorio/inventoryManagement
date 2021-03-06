import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSkuService from '../../../../services/Sku/CreateSkuService';

export default class SkuController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { product_id } = request.params;

    const {
      title,
      amount,
      size_P,
      size_M,
      size_G,
      size_GG,
      color,
      materials,
    } = request.body;

    const createSku = container.resolve(CreateSkuService);

    const sku = await createSku.execute({
      title,
      amount,
      size_P,
      size_M,
      size_G,
      size_GG,
      color,
      materials,
      product_id,
    });

    return response.json(sku);
  }
}
