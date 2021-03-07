import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';

import Color from '../../infra/typeorm/entities/Color';
import IColorRepository from '../../repositories/IColorRepository';
import ICreateColorDTO from '../../dtos/ICreateColorDTO';

@injectable()
class CreateColorService {
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

    const checkCodeExists = await this.colorRepository.findByCode(code);
    const checkDescriptionExists = await this.colorRepository.findByDescription(
      description,
    );

    if (checkCodeExists) {
      throw new AppError('This color code already exists');
    }
    if (checkDescriptionExists) {
      throw new AppError('This color description already exists');
    }

    const color = await this.colorRepository.create({
      code,
      description,
    });

    return color;
  }
}

export default CreateColorService;
