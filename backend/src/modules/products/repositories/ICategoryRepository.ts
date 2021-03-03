import Category from '../infra/typeorm/entities/Category';
import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';
import IPutCategoryDTO from '../dtos/IPutCategoryDTO';

export default interface ICategoryRepository {
  createCategory(data: ICreateCategoryDTO): Promise<Category>;
  putCategory(data: IPutCategoryDTO): Promise<Category | undefined>;
  findCategoryByName(name: string): Promise<Category | undefined>;
  findCategoryById(category_id: string): Promise<Category | undefined>;
  deleteCategory(category_id: string): Promise<void>;
}
