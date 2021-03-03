import { getRepository, Repository } from 'typeorm';

import ICategoryRepository from '../../../repositories/ICategoryRepository';
import ICreateCategoryDTO from '../../../dtos/ICreateCategoryDTO';
import IPutCategoryDTO from '../../../dtos/IPutCategoryDTO';

import Category from '../entities/Category';

class CategoryRepository implements ICategoryRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async findCategoryByName(name: string): Promise<Category | undefined> {
    const findCategory = await this.ormRepository.findOne({
      where: { name },
    });

    return findCategory;
  }

  public async findCategoryById(id: string): Promise<Category | undefined> {
    const category = await this.ormRepository.findOne(id);

    return category;
  }

  public async putCategory({
    name,
    category_id,
  }: IPutCategoryDTO): Promise<Category> {
    return this.ormRepository.save({
      id: category_id,
      name,
    });
  }

  public async createCategory({
    name,
    availability,
  }: ICreateCategoryDTO): Promise<Category> {
    const category = this.ormRepository.create({
      name,
      availability,
    });

    await this.ormRepository.save(category);

    return category;
  }

  public async deleteCategory(category_id: string): Promise<void> {
    await this.ormRepository.delete(category_id);
  }
}

export default CategoryRepository;
