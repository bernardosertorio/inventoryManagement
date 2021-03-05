import { getRepository, Repository } from 'typeorm';

import IProductRepository from '../../../repositories/IProductRepository';
import ICreateProductDTO from '../../../dtos/Product/ICreateProductDTO';
import IFindAllProductsInCategoryDTO from '../../../dtos/Product/IFindAllProductsInCategoryDTO';
import IDeleteProductDTO from '../../../dtos/Product/IDeleteProductDTO';
import IPutProductDTO from '../../../dtos/Product/IPutProductDTO';

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
    const findProduct = await this.ormRepository.findOne({ where: { title } });

    return findProduct;
  }

  public async findAllProductsInCategory({
    category_id,
  }: IFindAllProductsInCategoryDTO): Promise<Product[]> {
    const products = await this.ormRepository.find({ category_id });

    return products;
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
      title,
      availability,
      description,
      price,
    });
  }

  public async deleteProduct({ product_id }: IDeleteProductDTO): Promise<void> {
    await this.ormRepository.delete(product_id);
  }
}

export default ProductRepository;
