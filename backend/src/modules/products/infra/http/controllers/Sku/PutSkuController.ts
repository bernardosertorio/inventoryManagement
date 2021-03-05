import { Request, Response } from 'express';
import { container } from 'tsyringe';

import putSkuService from '../../../../services/Sku/PutSkuService';

export default class putSkuController {
  public async put(request: Request, response: Response): Promise<Response> {
    const { sku_id } = request.params;

    const { title, amount, sizes, colors, materials } = request.body;

    const putSku = container.resolve(putSkuService);

    const sku = await putSku.execute({
      title,
      sku_id,
      amount,
      sizes,
      colors,
      materials,
    });

    return response.json(sku);
  }
}
