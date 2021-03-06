import { Request, Response } from 'express';
import { container } from 'tsyringe';

import putSkuService from '../../../../services/Sku/PutSkuService';

export default class putSkuController {
  public async put(request: Request, response: Response): Promise<Response> {
    const { sku_id } = request.params;

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

    const putSku = container.resolve(putSkuService);

    const sku = await putSku.execute({
      sku_id,
      title,
      amount,
      size_P,
      size_M,
      size_G,
      size_GG,
      color,
      materials,
    });

    return response.json(sku);
  }
}
