import { injectable, inject } from 'tsyringe';

import Category from '../infra/typeorm/entities/Product';
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
    const category = await this.categoryRepository.getCategory(category_id);

    return category;
  }
}

export default GetCategoryService;
