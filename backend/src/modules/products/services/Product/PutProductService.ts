import { injectable, inject } from 'tsyringe';
import AppError from '../../../../shared/errors/AppError';

import Product from '../../infra/typeorm/entities/Product';
import IProductRepository from '../../repositories/IProductRepository';

interface IRequest {
  product_id: string;
  title: string;
  availability: boolean;
  description: string;
  price: number;
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
    const checkProductIdExists = await this.productRepository.getProductById(
      product_id,
    );

    if (!checkProductIdExists) {
      throw new AppError('Product not found');
    }
    const checkTitleExists = await this.productRepository.getProductByTitle(
      title,
    );

    if (checkTitleExists) {
      throw new AppError('Product title already exist');
    }

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
