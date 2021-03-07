import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';

import Size from '../../infra/typeorm/entities/Size';
import ISizeRepository from '../../repositories/ISizeRepository';
import ICreateSizeDTO from '../../dtos/ICreateSizeDTO';

@injectable()
class UpdateSizeService {
  constructor(
    @inject('SizeRepository')
    private sizeRepository: ISizeRepository,
  ) {}

  public async execute({ code, description }: ICreateSizeDTO): Promise<Size> {
    if (!code) {
      throw new AppError('The code cannot be empty');
    }

    if (!description) {
      throw new AppError('The description cannot be empty');
    }

    if (code.length !== 4) {
      throw new AppError('The code be have a four chars');
    }

    const checkDescriptionExists = await this.sizeRepository.findByDescription(
      description,
    );

    if (checkDescriptionExists) {
      throw new AppError('This category description already exists');
    }

    const size = await this.sizeRepository.update({
      code,
      description,
    });

    if (!size) {
      throw new AppError('This size code not exists');
    }

    return size;
  }
}

export default UpdateSizeService;
