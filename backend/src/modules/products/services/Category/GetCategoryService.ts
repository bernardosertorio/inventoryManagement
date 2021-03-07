import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';

import Category from '../../infra/typeorm/entities/Category';
import ICategoryRepository from '../../repositories/ICategoryRepository';

interface IRequest {
  code?: string;
  description?: string;
}

type IResponse = Category | Category[] | undefined;

@injectable()
class FindCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  public async execute(request: IRequest): Promise<IResponse> {
    const { code, description } = request;

    if (!code && !description) {
      return this.categoryRepository.find();
    }

    if (code && description) {
      throw new AppError(
        'Only one parameter must be informed code or description',
      );
    }

    if (code) {
      return this.categoryRepository.findByCode(code);
    }

    if (description) {
      return this.categoryRepository.findByDescription(description);
    }

    return [];
  }
}

export default FindCategoryService;
