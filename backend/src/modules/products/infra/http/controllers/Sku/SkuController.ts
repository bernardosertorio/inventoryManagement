import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSkuService from '../../../../services/Sku/CreateSkuService';

export default class SkuController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { product_id } = request.params;
    const { title, amount, sizes, colors, materials } = request.body;

    const createSku = container.resolve(CreateSkuService);

    const sku = await createSku.execute({
      title,
      amount,
      sizes,
      colors,
      materials,
      product_id,
    });

    return response.json(sku);
  }
}
