import IFindAllProductsInCategoryDTO from '../dtos/Product/IFindAllProductsInCategoryDTO';
import ICreateProductDTO from '../dtos/ICreateProductDTO';
import IPutProductDTO from '../dtos/IPutProductDTO';
import IDeleteProductDTO from '../dtos/IDeleteProductDTO';

import Product from '../infra/typeorm/entities/Product';

export default interface IProductRepository {
  createProduct(data: ICreateProductDTO): Promise<Product>;
  getProductById(product_id: string): Promise<Product | undefined>;
  findAllProductsInCategory(
    category_id: IFindAllProductsInCategoryDTO,
  ): Promise<Product[]>;
  getProductByTitle(title: string): Promise<Product | undefined>;
  editProduct(data: IPutProductDTO): Promise<Product | undefined>;
  deleteProduct(data: IDeleteProductDTO): Promise<void>;
}
