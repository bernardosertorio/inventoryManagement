import { injectable, inject } from 'tsyringe';

import Sku from '../../infra/typeorm/entities/Sku';
import ISkuRepository from '../../repositories/ISkuRepository';

interface IRequest {
  sku_id: string;
}

@injectable()
class GetSkuService {
  constructor(
    @inject('SkuRepository')
    private skuRepository: ISkuRepository,
  ) {}

  public async execute({ sku_id }: IRequest): Promise<Sku | undefined> {
    const sku = await this.skuRepository.getSkuById(sku_id);

    return sku;
  }
}

export default GetSkuService;
