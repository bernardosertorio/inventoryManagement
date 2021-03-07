import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';

import Model from '../../infra/typeorm/entities/Model';
import IModelRepository from '../../repositories/IModelRepository';

interface IRequest {
  code?: string;
  description?: string;
}

type IResponse = Model | Model[] | undefined;

@injectable()
class FindModelsService {
  constructor(
    @inject('ModelsRepository')
    private modelRepository: IModelRepository,
  ) {}

  public async execute(request: IRequest): Promise<IResponse> {
    const { code, description } = request;

    if (!code && !description) {
      return this.modelRepository.find();
    }

    if (code && description) {
      throw new AppError(
        'Only one parameter must be informed code or description',
      );
    }

    if (code) {
      return this.modelRepository.findByCode(code);
    }

    if (description) {
      return this.modelRepository.findByDescription(description);
    }

    return [];
  }
}

export default FindModelsService;
