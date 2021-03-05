import { injectable, inject } from 'tsyringe';

import ISkuRepository from '../../repositories/ISkuRepository';

interface IRequest {
  sku_id: string;
}

@injectable()
class deleteSkuService {
  constructor(
    @inject('SkuRepository')
    private skuRepository: ISkuRepository,
  ) {}

  public async execute({ sku_id }: IRequest): Promise<void> {
    const sku = await this.skuRepository.deleteSku({ sku_id });

    return sku;
  }
}

export default deleteSkuService;
