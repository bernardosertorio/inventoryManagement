import { injectable, inject } from 'tsyringe';

import AppError from '../../../shared/errors/AppError';
import IProductRepository from '../repositories/IProductRepository';

import Product from '../infra/typeorm/entities/Product';

interface IRequest {
  category_id: string;
  title: string;
  availability: boolean;
  description: string;
  price: number;
  sku: string;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  public async execute({
    category_id,
    title,
    availability,
    description,
    price,
    sku,
  }: IRequest): Promise<Product> {
    const checkProductExists = await this.productRepository.getProductByTitle(
      title,
    );

    if (checkProductExists) {
      throw new AppError('Product already exists.');
    }

    const product = await this.productRepository.createProduct({
      category_id,
      title,
      availability,
      description,
      price,
      sku,
    });

    return product;
  }
}

export default CreateProductService;
