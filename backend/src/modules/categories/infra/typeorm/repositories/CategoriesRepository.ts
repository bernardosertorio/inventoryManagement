import { getRepository, Repository } from 'typeorm';

import ICategoriesRepository from '';
import ICreateCategoryDTO from '';

import Category from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async findByDate(
    date: Date,
    provider_id: string,
  ): Promise<Category | undefined> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date, provider_id },
    });

    return findAppointment;
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

export default CategoriesRepository;
