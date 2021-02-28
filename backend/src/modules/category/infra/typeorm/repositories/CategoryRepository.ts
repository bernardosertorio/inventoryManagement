import { getRepository, Repository } from 'typeorm';

import ICategoryRepository from '../../../repositories/ICategoryRepository';
import ICreateCategoryDTO from '../../../dtos/ICreateCategoryDTO';

import Category from '../entities/Category';

class CategoryRepository implements ICategoryRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async findByName(name: string): Promise<Category | undefined> {
    const findCategory = await this.ormRepository.findOne({
      where: { name },
    });

    return findCategory;
  }

  public async create({
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
}

export default CategoryRepository;
