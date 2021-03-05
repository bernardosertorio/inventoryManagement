import { injectable, inject } from 'tsyringe';

import Sku from '../../infra/typeorm/entities/Sku';
import ISkuRepository from '../../repositories/ISkuRepository';

interface IRequest {
  product_id: string;
}

@injectable()
class GetSkusInProductService {
  constructor(
    @inject('SkuRepository')
    private skuRepository: ISkuRepository,
  ) {}

  public async execute({ product_id }: IRequest): Promise<Sku[]> {
    const skusInCategory = await this.skuRepository.findAllSkusInProduct({
      product_id,
    });

    return skusInCategory;
  }
}

export default GetSkusInProductService;
