import { injectable, inject } from 'tsyringe';

import Product from '../../infra/typeorm/entities/Product';
import IProductRepository from '../../repositories/IProductRepository';

interface IRequest {
  product_id: string;
}

@injectable()
class GetProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  public async execute({ product_id }: IRequest): Promise<Product | undefined> {
    const product = await this.productRepository.getProductById(product_id);

    return product;
  }
}

export default GetProductService;
