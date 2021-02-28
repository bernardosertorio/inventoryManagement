import Product from '../infra/typeorm/entities/Product';
import IProductDTO from '../dtos/IProductDTO';

export default interface ICategoryRepository {
  create(data: IProductDTO): Promise<Product>;
  getByName(name: string): Promise<Product | undefined>;
  put(data: IProductDTO): Promise<Product | undefined>;
  delete(data: IProductDTO): Promise<void>;
}
