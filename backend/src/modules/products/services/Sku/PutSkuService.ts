import { injectable, inject } from 'tsyringe';

import Sku from '../../infra/typeorm/entities/Sku';
import ISkuRepository from '../../repositories/ISkuRepository';

interface IRequest {
  sku_id: string;
  title: string;
  amount: number;
  size_P: number;
  size_M: number;
  size_G: number;
  size_GG: number;
  color: string;
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
    size_P,
    size_M,
    size_G,
    size_GG,
    color,
    materials,
  }: IRequest): Promise<Sku | undefined> {
    const sku = await this.skuRepository.editSku({
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

    return sku;
  }
}

export default putSkuService;
