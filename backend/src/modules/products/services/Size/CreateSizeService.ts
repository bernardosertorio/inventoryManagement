import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';

import Size from '../../infra/typeorm/entities/Size';
import ISizeRepository from '../../repositories/ISizeRepository';
import ICreateSizeDTO from '../../dtos/ICreateSizeDTO';

@injectable()
class CreateSizeService {
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

    const checkCodeExists = await this.sizeRepository.findByCode(code);
    const checkDescriptionExists = await this.sizeRepository.findByDescription(
      description,
    );

    if (checkCodeExists) {
      throw new AppError('This size code already exists');
    }
    if (checkDescriptionExists) {
      throw new AppError('This size description already exists');
    }

    const size = await this.sizeRepository.create({
      code,
      description,
    });

    return size;
  }
}

export default CreateSizeService;
