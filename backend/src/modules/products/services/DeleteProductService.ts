import { injectable, inject } from 'tsyringe';

import IProductRepository from '../repositories/IProductRepository';

interface IRequest {
  product_id: string;
}

@injectable()
class putProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  public async execute({ product_id }: IRequest): Promise<void> {
    const product = await this.productRepository.deleteProduct({ product_id });

    return product;
  }
}

export default putProductService;
