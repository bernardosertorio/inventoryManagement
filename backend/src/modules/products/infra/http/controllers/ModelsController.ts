import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateModelService from '../../../services/Model/CreateModelService';
import DeleteModelService from '../../../services/Model/DeleteModelService';
import FindModelService from '../../../services/Model/FindModelService';
import UpdateModelService from '../../../services/Model/UpdateModelService';

import ICreateModelDTO from '../../../dtos/ICreateModelDTO';

interface IRequest {
  code?: string;
  description?: string;
}

class ModelsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { code, description } = request.body as ICreateModelDTO;

    const createModelService = container.resolve(CreateModelService);

    const model = await createModelService.execute({ code, description });

    return response.send(model);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { code, description } = request.query as IRequest;

    const findModelService = container.resolve(FindModelService);

    const model = await findModelService.execute({ code, description });

    return response.send(model);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { code } = request.params;

    const { description } = request.body as ICreateModelDTO;

    const updateModelService = container.resolve(UpdateModelService);

    const model = await updateModelService.execute({ code, description });

    return response.send(model);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { code } = request.params;

    const deleteModelService = container.resolve(DeleteModelService);

    const model = await deleteModelService.execute(code);

    return response.send(model);
  }
}

export default ModelsController;
