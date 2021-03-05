import { Request, Response } from 'express';
import { container } from 'tsyringe';

import deleteSkuService from '../../../../services/Sku/DeleteSkuService';

export default class deleteSkuController {
  public async delete(request: Request, response: Response): Promise<Response> {
    const { sku_id } = request.params;

    const deleteSku = container.resolve(deleteSkuService);

    const sku = await deleteSku.execute({
      sku_id,
    });

    return response.json(sku);
  }
}
