import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProductService from '../../../services/Product/CreateProductService';
import DeleteProductService from '../../../services/Product/DeleteProductService';
import FindProductService from '../../../services/Product/GetProductService';
import UpdateProductService from '../../../services/Product/PutProductService';

import ICreateProductDTO from '../../../dtos/ICreateProductDTO';
import IUpdateProductDTO from '../../../dtos/IUpdateProductDTO';

interface IRequest {
  sku?: string;
}

class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body as ICreateProductDTO;

    const createProductService = container.resolve(CreateProductService);

    const product = await createProductService.execute({
      ...data,
      balance: Number(data.balance),
    });

    return response.send(product);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { sku } = request.query as IRequest;

    const findProductService = container.resolve(FindProductService);

    const product = await findProductService.execute({ sku });

    return response.send(product);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { sku } = request.params;

    const { description, balance } = request.body as IUpdateProductDTO;

    const updateProductService = container.resolve(UpdateProductService);

    const product = await updateProductService.execute({
      sku,
      description,
      balance: Number(balance),
    });

    return response.send(product);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { sku } = request.params;

    const deleteProductService = container.resolve(DeleteProductService);

    const product = await deleteProductService.execute(sku);

    return response.send(product);
  }
}

export default ProductsController;
