import Product from '../infra/typeorm/entities/Product';
import ICreateProductDTO from '../dtos/ICreateProductDTO';

export default interface ICategoryRepository {
  createProduct(data: ICreateProductDTO): Promise<Product>;
  getProductById(name: string): Promise<Product | undefined>;
  editProduct(data: ICreateProductDTO): Promise<Product | undefined>;
  deleteProduct(data: ICreateProductDTO): Promise<void>;
}
