import { injectable, inject } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';

import Category from '../infra/typeorm/entities/Category';
import ICategoriesRepository from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
}

@injectable()
class GetCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoriesRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<Category> {
    const category = await this.categoryRepository.findByName(name);

    if (!category) {
      throw new AppError('Category does not exist. Try another name');
    }

    return category;
  }
}

export default GetCategoryService;
