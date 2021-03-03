import { injectable, inject } from 'tsyringe';

import AppError from '../../../shared/errors/AppError';
import ISkuRepository from '../repositories/ISkuRepository';

import Sku from '../infra/typeorm/entities/Sku';
import IProductRepository from '../repositories/IProductRepository';

interface IRequest {
  product_id: string;
  title: string;
  amount: string;
  sizes: string;
  colors: string;
  materials: string;
}

@injectable()
class CreateSkuService {
  constructor(
    @inject('SkuRepository')
    private skuRepository: ISkuRepository,

    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  public async execute({
    title,
    amount,
    sizes,
    colors,
    materials,
    product_id,
  }: IRequest): Promise<Sku> {
    const checkProducExists = await this.productRepository.getProductById(
      product_id,
    );

    if (!checkProducExists) {
      throw new AppError('Produc not found.');
    }

    const checkSkuExists = await this.skuRepository.getSkuByTitle(title);

    if (checkSkuExists) {
      throw new AppError('Sku already exists.');
    }

    const sku = await this.skuRepository.createSku({
      product_id,
      title,
      amount,
      sizes,
      colors,
      materials,
    });

    return sku;
  }
}

export default CreateSkuService;
