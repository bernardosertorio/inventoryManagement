import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';

import ISizeRepository from '../../repositories/ISizeRepository';

@injectable()
class DeleteSizeService {
  constructor(
    @inject('SizeRepository')
    private sizeRepository: ISizeRepository,
  ) {}

  public async execute(code: string): Promise<void> {
    if (code.length !== 4) {
      throw new AppError('The code be have a four chars');
    }

    const checkCodeExists = await this.sizeRepository.findByCode(code);

    if (!checkCodeExists) {
      throw new AppError('This size code not exists');
    }

    await this.sizeRepository.delete(code);
  }
}

export default DeleteSizeService;
