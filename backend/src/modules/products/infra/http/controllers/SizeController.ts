import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSizeService from '../../../services/Size/CreateSizeService';
import DeleteSizeService from '../../../services/Size/DeleteSizeService';
import FindSizeService from '../../../services/Size/GetSizeService';
import UpdateSizeService from '../../../services/Size/PutSizeService';

import ICreateSizeDTO from '../../../dtos/ICreateSizeDTO';

interface IRequest {
  code?: string;
  description?: string;
}

class SizesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { code, description } = request.body as ICreateSizeDTO;

    const createSizeService = container.resolve(CreateSizeService);

    const size = await createSizeService.execute({ code, description });

    return response.send(size);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { code, description } = request.query as IRequest;

    const findSizeService = container.resolve(FindSizeService);

    const size = await findSizeService.execute({ code, description });

    return response.send(size);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { code } = request.params;

    const { description } = request.body as ICreateSizeDTO;

    const updateSizeService = container.resolve(UpdateSizeService);

    const size = await updateSizeService.execute({ code, description });

    return response.send(size);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { code } = request.params;

    const deleteSizeService = container.resolve(DeleteSizeService);

    const size = await deleteSizeService.execute(code);

    return response.send(size);
  }
}

export default SizesController;
