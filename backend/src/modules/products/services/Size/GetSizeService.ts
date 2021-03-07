import { injectable, inject } from 'tsyringe';

import ISizeRepository from '../../repositories/ISizeRepository';
import AppError from '../../../../shared/errors/AppError';

import Size from '../../infra/typeorm/entities/Size';

interface IRequest {
  code?: string;
  description?: string;
}

type IResponse = Size | Size[] | undefined;

@injectable()
class FindSizeService {
  constructor(
    @inject('SizeRepository')
    private sizeRepository: ISizeRepository,
  ) {}

  public async execute(request: IRequest): Promise<IResponse> {
    const { code, description } = request;

    if (!code && !description) {
      return this.sizeRepository.find();
    }

    if (code && description) {
      throw new AppError(
        'Only one parameter must be informed code or description',
      );
    }

    if (code) {
      return this.sizeRepository.findByCode(code);
    }

    if (description) {
      return this.sizeRepository.findByDescription(description);
    }

    return [];
  }
}

export default FindSizeService;
