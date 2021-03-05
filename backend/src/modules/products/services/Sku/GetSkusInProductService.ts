import { injectable, inject } from 'tsyringe';

import IProductRepository from '../../repositories/IProductRepository';

import Sku from '../../infra/typeorm/entities/Sku';

interface IRequest {
  product_id: string;
}

@injectable()
class GetSkusInProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  public async execute({ product_id }: IRequest): Promise<Sku[]> {
    const skusInCategory = await this.productRepository.findAllSkusInProduct({
      product_id,
    });

    return skusInCategory;
  }
}

export default GetSkusInProductService;
