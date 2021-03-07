import { injectable, inject } from 'tsyringe';

import Product from '../../infra/typeorm/entities/Product';
import AppError from '../../../../shared/errors/AppError';

import IProductRepository from '../../repositories/IProductRepository';

interface IRequest {
  sku?: string;
}

type IResponse = Product | Product[] | undefined;

@injectable()
class FindProductsService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  public async execute(request: IRequest): Promise<IResponse> {
    const { sku } = request;

    if (!sku) {
      return this.productRepository.find();
    }
    if (sku.length !== 19) {
      throw new AppError('The code be have a nineteen chars');
    }

    return this.productRepository.findBySku(sku);
  }
}

export default FindProductsService;
