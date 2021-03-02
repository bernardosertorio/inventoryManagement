import { injectable, inject } from 'tsyringe';

import Sku from '../infra/typeorm/entities/Sku';
import ISkuRepository from '../repositories/ISkuRepository';

interface IRequest {
  title: string;
  sku_id: string;
  amount: string;
  sizes: string;
  colors: string;
  materials: string;
}

@injectable()
class putSkuService {
  constructor(
    @inject('SkuRepository')
    private skuRepository: ISkuRepository,
  ) {}

  public async execute({
    sku_id,
    title,
    amount,
    sizes,
    colors,
    materials,
  }: IRequest): Promise<Sku | undefined> {
    const sku = await this.skuRepository.editSku({
      sku_id,
      title,
      amount,
      sizes,
      colors,
      materials,
    });

    return sku;
  }
}

export default putSkuService;
