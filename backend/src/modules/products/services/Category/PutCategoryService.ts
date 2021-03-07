import { injectable, inject } from 'tsyringe';
import AppError from '../../../../shared/errors/AppError';

import Category from '../../infra/typeorm/entities/Category';
import ICategoryRepository from '../../repositories/ICategoryRepository';

interface IRequest {
  name: string;
  category_id: string;
}

@injectable()
class putSkuService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  public async execute({
    category_id,
    name,
  }: IRequest): Promise<Category | undefined> {
    const checkNameExist = await this.categoryRepository.findCategoryByName(
      name,
    );

    if (checkNameExist) {
      throw new AppError('name already exists');
    }

    const category = await this.categoryRepository.putCategory({
      category_id,
      name,
    });

    return category;
  }
}

export default putSkuService;
