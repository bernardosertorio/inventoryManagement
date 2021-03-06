import { injectable, inject } from 'tsyringe';

import ICreateCategoryDTO from '@modules/products/dtos/ICreateCategoryDTO';
import AppError from '../../../../shared/errors/AppError';

import Category from '../../infra/typeorm/entities/Category';
import ICategoryRepository from '../../repositories/ICategoryRepository';

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  public async execute({
    code,
    description,
  }: ICreateCategoryDTO): Promise<Category> {
    if (!code) {
      throw new AppError('The code cannot be empty');
    }

    if (!description) {
      throw new AppError('The description cannot be empty');
    }

    if (code.length !== 4) {
      throw new AppError('The code be have a four chars');
    }

    const checkCodeExists = await this.categoryRepository.findByCode(code);
    const checkDescriptionExists = await this.categoryRepository.findByDescription(
      description,
    );

    if (checkCodeExists) {
      throw new AppError('This category code already exists');
    }

    if (checkDescriptionExists) {
      throw new AppError('This category description already exists');
    }

    const category = await this.categoryRepository.create({
      code,
      description,
    });

    return category;
  }
}

export default CreateCategoryService;
