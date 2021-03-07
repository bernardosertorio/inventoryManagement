import { getRepository, Repository } from 'typeorm';

import ICreateProductDTO from '../../../dtos/ICreateProductDTO';

import IUpdateProductDTO from '../../../dtos/IUpdateProductDTO';
import IProductRepository from '../../../repositories/IProductRepository';
import Product from '../entities/Product';

class ProductRepository implements IProductRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create(data: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create(data);

    await this.ormRepository.save(product);

    return product;
  }

  public async findBySku(sku: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne({
      where: { sku },
      relations: ['category', 'color', 'model', 'size'],
    });

    return product;
  }

  public async find(): Promise<Product[]> {
    const products = await this.ormRepository.find({
      relations: ['category', 'color', 'model', 'size'],
      select: [
        'sku',
        'balance',
        'description',
        'category',
        'color',
        'model',
        'size',
      ],
    });

    return products;
  }

  public async delete(sku: string): Promise<void> {
    await this.ormRepository.delete(sku);
  }

  public async update(data: IUpdateProductDTO): Promise<Product | undefined> {
    const { sku } = data;

    const product = await this.ormRepository.findOne(sku);

    if (product) {
      Object.assign(product, data);
      return this.ormRepository.save(product);
    }
    return product;
  }
}

export default ProductRepository;
