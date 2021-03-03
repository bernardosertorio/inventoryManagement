import { injectable, inject } from 'tsyringe';

import AppError from '../../../shared/errors/AppError';
import IProductRepository from '../repositories/IProductRepository';

import Product from '../infra/typeorm/entities/Product';
import ICategoryRepository from '../repositories/ICategoryRepository';

interface IRequest {
  category_id: string;
  title: string;
  availability: boolean;
  description: string;
  price: string;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,

    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  public async execute({
    category_id,
    title,
    availability,
    description,
    price,
  }: IRequest): Promise<Product> {
    const checkProductExists = await this.productRepository.getProductByTitle(
      title,
    );

    if (checkProductExists) {
      throw new AppError('Product already exists.');
    }

    const checkCategoryExists = await this.categoryRepository.findCategoryById(
      category_id,
    );

    if (!checkCategoryExists) {
      throw new AppError('Category not found.');
    }

    const product = await this.productRepository.createProduct({
      category_id,
      title,
      availability,
      description,
      price,
    });

    return product;
  }
}

export default CreateProductService;
