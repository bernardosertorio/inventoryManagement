import { getRepository, Repository } from 'typeorm';

import IProductRepository from '../../../repositories/IProductRepository';
import ICreateProductDTO from '../../../dtos/ICreateProductDTO';
import IFindAllProductsInCategory from '../../../dtos/IFindAllProductsInCategoryDTO';
import IDeleteProductDTO from '../../../dtos/IDeleteProductDTO';
import IPutProductDTO from '../../../dtos/IPutProductDTO';

import Product from '../entities/Product';

class ProductRepository implements IProductRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async findAllProductsInCategory({
    category_id,
  }: IFindAllProductsInCategory): Promise<Product[]> {
    const product = await this.ormRepository.find({ category_id });

    return product;
  }

  public async getProductById(id: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne(id);

    return product;
  }

  public async getProductByTitle(title: string): Promise<Product | undefined> {
    const findProduct = await this.ormRepository.findOne({ where: { title } });

    return findProduct;
  }

  public async createProduct(productData: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create(productData);

    await this.ormRepository.save(product);

    return product;
  }

  public async editProduct({
    availability,
    description,
    price,
    product_id,
    title,
  }: IPutProductDTO): Promise<Product> {
    return this.ormRepository.save({
      id: product_id,
      availability,
      description,
      price,
      title,
    });
  }

  public async deleteProduct({ product_id }: IDeleteProductDTO): Promise<void> {
    await this.ormRepository.delete(product_id);
  }
}

export default ProductRepository;
