import ICreateCategoryDTO from '../dtos/Category/ICreateCategoryDTO';
import IPutCategoryDTO from '../dtos/Category/IPutCategoryDTO';

import Category from '../infra/typeorm/entities/Category';

export default interface ICategoryRepository {
  createCategory(data: ICreateCategoryDTO): Promise<Category>;
  putCategory(data: IPutCategoryDTO): Promise<Category | undefined>;
  findCategoryByName(name: string): Promise<Category | undefined>;
  findCategoryById(category_id: string): Promise<Category | undefined>;
  deleteCategory(category_id: string): Promise<void>;
}
