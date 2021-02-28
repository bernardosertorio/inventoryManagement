import { getRepository, Repository } from 'typeorm';

import IProductRepository from '../../../repositories/IProductRepository';
import ICreateProductDTO from '../../../dtos/ICreateProductDTO';

import Product from '../entities/Product';

class ProductRepository implements IProductRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async findById(id: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne(id);

    return product;
  }

  public async create(userData: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create(userData);

    await this.ormRepository.save(product);

    return product;
  }

  public async save(product: Product): Promise<Product> {
    return this.ormRepository.save(product);
  }

  public async delete(data: ICreateProductDTO): Promise<void> {
    const deleteProduct = await this.ormRepository.delete({
      where: {},
    });
  }
}

export default ProductRepository;
