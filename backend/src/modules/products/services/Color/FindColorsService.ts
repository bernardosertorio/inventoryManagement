import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';

import Color from '../../infra/typeorm/entities/Color';
import IColorRepository from '../../repositories/IColorRepository';

interface IRequest {
  code?: string;
  description?: string;
}

type IResponse = Color | Color[] | undefined;

@injectable()
class FindColorsService {
  constructor(
    @inject('ColorRepository')
    private colorRepository: IColorRepository,
  ) {}

  public async execute(request: IRequest): Promise<IResponse> {
    const { code, description } = request;

    if (!code && !description) {
      return this.colorRepository.find();
    }

    if (code && description) {
      throw new AppError(
        'Only one parameter must be informed code or description',
      );
    }

    if (code) {
      return this.colorRepository.findByCode(code);
    }

    if (description) {
      return this.colorRepository.findByDescription(description);
    }

    return [];
  }
}

export default FindColorsService;
