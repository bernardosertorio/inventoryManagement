import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';

import Category from '../../infra/typeorm/entities/Category';
import ICategoryRepository from '../../repositories/ICategoryRepository';

interface IRequest {
  name: string;
  availability: boolean;
}

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  public async execute({ name, availability }: IRequest): Promise<Category> {
    const checkNameExists = await this.categoryRepository.findCategoryByName(
      name,
    );

    if (checkNameExists) {
      throw new AppError('Name already used.');
    }

    const category = await this.categoryRepository.createCategory({
      name,
      availability,
    });

    return category;
  }
}

export default CreateCategoryService;
