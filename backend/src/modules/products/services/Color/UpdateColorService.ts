import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';

import Color from '../../infra/typeorm/entities/Color';
import IColorRepository from '../../repositories/IColorRepository';
import ICreateColorDTO from '../../dtos/ICreateColorDTO';

@injectable()
class UpdateColorService {
  constructor(
    @inject('ColorRepository')
    private colorRepository: IColorRepository,
  ) {}

  public async execute({ code, description }: ICreateColorDTO): Promise<Color> {
    if (!code) {
      throw new AppError('The code cannot be empty');
    }

    if (!description) {
      throw new AppError('The description cannot be empty');
    }

    if (code.length !== 4) {
      throw new AppError('The code be have a four chars');
    }

    const checkDescriptionExists = this.colorRepository.findByDescription(
      description,
    );

    if (checkDescriptionExists) {
      throw new AppError('This category description already exists');
    }

    const color = this.colorRepository.update({
      code,
      description,
    });

    if (!color) {
      throw new AppError('This color code not exists');
    }

    return color;
  }
}

export default UpdateColorService;
