import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateColorService from '../../../services/Color/CreateColorServer';
import DeleteColorService from '../../../services/Color/DeleteColorService';
import FindColorService from '../../../services/Color/FindColorsService';
import UpdateColorService from '../../../services/Color/UpdateColorService';

import ICreateColorDTO from '../../../dtos/ICreateColorDTO';

interface IRequest {
  code?: string;
  description?: string;
}

class ColorsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { code, description } = request.body as ICreateColorDTO;

    const createColorService = container.resolve(CreateColorService);

    const color = await createColorService.execute({ code, description });

    return response.send(color);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { code, description } = request.query as IRequest;

    const findColorService = container.resolve(FindColorService);

    const color = await findColorService.execute({ code, description });

    return response.send(color);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { code } = request.params;

    const { description } = request.body as ICreateColorDTO;

    const updateColorService = container.resolve(UpdateColorService);

    const color = await updateColorService.execute({ code, description });

    return response.send(color);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { code } = request.params;

    const deleteColorService = container.resolve(DeleteColorService);

    const color = await deleteColorService.execute(code);

    return response.send(color);
  }
}

export default ColorsController;
