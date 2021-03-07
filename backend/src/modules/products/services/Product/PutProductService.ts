import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';

import Product from '../../infra/typeorm/entities/Product';
import IProductRepository from '../../repositories/IProductRepository';
import IUpdateProductDTO from '../../dtos/IUpdateProductDTO';

@injectable()
class UpdateProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  public async execute(data: IUpdateProductDTO): Promise<Product> {
    const { sku, description, balance } = data;
    if (!sku) {
      throw new AppError('The sku cannot be empty');
    }

    if (!description) {
      throw new AppError('The description cannot be empty');
    }

    if (balance !== 0 && !balance) {
      throw new AppError('The balance cannot be empty');
    }

    if (!Number.isInteger(balance)) {
      throw new AppError('The balance need be an Integer value');
    }

    const product = await this.productRepository.update(data);

    if (!product) {
      throw new AppError('This product sku not exists');
    }

    return product;
  }
}

export default UpdateProductService;
