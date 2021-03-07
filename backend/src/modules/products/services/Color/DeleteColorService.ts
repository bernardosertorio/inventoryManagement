import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';

import IColorRepository from '../../repositories/IColorRepository';

@injectable()
class DeleteColorService {
  constructor(
    @inject('ColorsRepository')
    private colorRepository: IColorRepository,
  ) {}

  public async execute(code: string): Promise<void> {
    if (code.length !== 4) {
      throw new AppError('The code be have a four chars');
    }

    const checkCodeExists = await this.colorRepository.findByCode(code);

    if (!checkCodeExists) {
      throw new AppError('This color code not exists');
    }

    await this.colorRepository.delete(code);
  }
}

export default DeleteColorService;
