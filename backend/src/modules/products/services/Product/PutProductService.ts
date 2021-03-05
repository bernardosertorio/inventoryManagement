import { injectable, inject } from 'tsyringe';

import Product from '../infra/typeorm/entities/Product';
import IProductRepository from '../repositories/IProductRepository';

interface IRequest {
  product_id: string;
  title: string;
  availability: boolean;
  description: string;
  price: string;
}

@injectable()
class putProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  public async execute({
    product_id,
    title,
    availability,
    description,
    price,
  }: IRequest): Promise<Product | undefined> {
    const product = await this.productRepository.editProduct({
      product_id,
      title,
      availability,
      description,
      price,
    });

    return product;
  }
}

export default putProductService;
