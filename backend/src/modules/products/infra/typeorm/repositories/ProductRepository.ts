import { getRepository, Repository } from 'typeorm';

import IProductRepository from '../../../repositories/IProductRepository';
import ICreateProductDTO from '../../../dtos/ICreateProductDTO';

import Product from '../entities/Product';

class ProductRepository implements IProductRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async getProductById(id: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne(id);

    return product;
  }

  public async getProductByTitle(title: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne(title);

    return product;
  }

  public async createProduct(userData: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create(userData);

    await this.ormRepository.save(product);

    return product;
  }

  public async editProduct(product: Product): Promise<Product> {
    return this.ormRepository.save(product);
  }

  public async deleteProduct(data: ICreateProductDTO): Promise<void> {
    await this.ormRepository.delete(data.id);
  }
}

export default ProductRepository;
