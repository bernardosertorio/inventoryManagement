import { injectable, inject } from 'tsyringe';

import Product from '../../infra/typeorm/entities/Product';
import IProductRepository from '../../repositories/IProductRepository';

interface IRequest {
  category_id: string;
}

@injectable()
class GetProductsInCategoryService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  public async execute({ category_id }: IRequest): Promise<Product[]> {
    const productsInCategory = await this.productRepository.findAllProductsInCategory(
      {
        category_id,
      },
    );

    return productsInCategory;
  }
}

export default GetProductsInCategoryService;
