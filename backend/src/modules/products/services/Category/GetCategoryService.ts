import { injectable, inject } from 'tsyringe';

import Category from '../infra/typeorm/entities/Category';
import ICategoryRepository from '../repositories/ICategoryRepository';

interface IRequest {
  category_id: string;
}

@injectable()
class GetCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  public async execute({
    category_id,
  }: IRequest): Promise<Category | undefined> {
    const category = await this.categoryRepository.findCategoryById(
      category_id,
    );

    return category;
  }
}

export default GetCategoryService;
