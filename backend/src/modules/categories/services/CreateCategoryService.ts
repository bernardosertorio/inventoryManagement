import { injectable, inject } from 'tsyringe';

import AppError from '../../../shared/errors/AppError';

import Category from '../infra/typeorm/entities/Category';
import ICategoriesRepository from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  availability: boolean;
}

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute({ name, availability }: IRequest): Promise<Category> {
    const checkNameExists = await this.categoriesRepository.findByName(name);

    if (checkNameExists) {
      throw new AppError('Name already used.');
    }

    const category = await this.categoriesRepository.create({
      name,
      availability,
    });

    return category;
  }
}

export default CreateCategoryService;
