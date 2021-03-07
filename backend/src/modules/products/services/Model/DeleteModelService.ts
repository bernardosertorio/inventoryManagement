import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';

import IModelRepository from '../../repositories/IModelRepository';

@injectable()
class DeleteModelService {
  constructor(
    @inject('ModelRepository')
    private modelRepository: IModelRepository,
  ) {}

  public async execute(code: string): Promise<void> {
    if (code.length !== 4) {
      throw new AppError('The code be have a four chars');
    }

    const checkCodeExists = await this.modelRepository.findByCode(code);

    if (!checkCodeExists) {
      throw new AppError('This model code not exists');
    }

    await this.modelRepository.delete(code);
  }
}

export default DeleteModelService;
