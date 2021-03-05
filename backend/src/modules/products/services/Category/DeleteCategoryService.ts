import { injectable, inject } from 'tsyringe';

import ICategoryRepository from '../../repositories/ICategoryRepository';

interface IRequest {
  category_id: string;
}

@injectable()
class deleteCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  public async execute({ category_id }: IRequest): Promise<void> {
    const category = await this.categoryRepository.deleteCategory(category_id);

    return category;
  }
}

export default deleteCategoryService;
