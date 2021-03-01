import Product from '../infra/typeorm/entities/Product';
import ICreateProductDTO from '../dtos/ICreateProductDTO';
import IFindAllProductsInCategoryDTO from '../dtos/IFindAllProductsInCategoryDTO';

export default interface IProductRepository {
  createProduct(data: ICreateProductDTO): Promise<Product>;
  findAllProductsInCategory(
    category_id: IFindAllProductsInCategoryDTO,
  ): Promise<Product[]>;
  getProductById(id: string): Promise<Product | undefined>;
  getProductByTitle(title: string): Promise<Product | undefined>;
  editProduct(data: ICreateProductDTO): Promise<Product | undefined>;
  deleteProduct(data: ICreateProductDTO): Promise<void>;
}
