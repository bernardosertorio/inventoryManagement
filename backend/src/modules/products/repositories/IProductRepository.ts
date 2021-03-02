import Product from '../infra/typeorm/entities/Product';
import ICreateProductDTO from '../dtos/ICreateProductDTO';
import IFindAllProductsInCategoryDTO from '../dtos/IFindAllProductsInCategoryDTO';
import IPutProductDTO from '../dtos/IPutProductDTO';
import IDeleteProductDTO from '../dtos/IDeleteProductDTO';

export default interface IProductRepository {
  createProduct(data: ICreateProductDTO): Promise<Product>;
  findAllProductsInCategory(
    category_id: IFindAllProductsInCategoryDTO,
  ): Promise<Product[]>;
  getProductById(category_id: string): Promise<Product | undefined>;
  getProductByTitle(title: string): Promise<Product | undefined>;
  editProduct(data: IPutProductDTO): Promise<Product | undefined>;
  deleteProduct(data: IDeleteProductDTO): Promise<void>;
}
