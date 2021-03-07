import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';

import ICategoryRepository from '../../repositories/ICategoryRepository';

@injectable()
class DeleteCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  public async execute(code: string): Promise<void> {
    if (code.length !== 4) {
      throw new AppError('The code be have a four chars');
    }

    const checkCodeExists = await this.categoryRepository.findByCode(code);

    if (!checkCodeExists) {
      throw new AppError('This category code not exists');
    }

    await this.categoryRepository.delete(code);
  }
}

export default DeleteCategoryService;
