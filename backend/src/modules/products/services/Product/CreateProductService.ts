import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';

import Product from '../../infra/typeorm/entities/Product';
import IProductRepository from '../../repositories/IProductRepository';
import ICreateProductDTO from '../../dtos/ICreateProductDTO';
import ICategoryRepository from '../../repositories/ICategoryRepository';
import IColorRepository from '../../repositories/IColorRepository';
import IModelRepository from '../../repositories/IModelRepository';
import ISizeRepository from '../../repositories/ISizeRepository';

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,

    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,

    @inject('ColorRepository')
    private colorRepository: IColorRepository,

    @inject('ModelRepository')
    private modelRepository: IModelRepository,

    @inject('SizeRepository')
    private sizeRepository: ISizeRepository,
  ) {}

  public async execute(data: ICreateProductDTO): Promise<Product> {
    const {
      description,
      balance,
      category_code,
      color_code,
      model_code,
      size_code,
    } = data;

    if (!description) {
      throw new AppError('The description cannot be empty');
    }

    if (balance === undefined) {
      throw new AppError('The balance cannot be undefined');
    }

    if (!Number.isInteger(balance)) {
      throw new AppError('The balance need be an Integer value');
    }

    if (!category_code) {
      throw new AppError('The category_code cannot be empty');
    }

    if (!color_code) {
      throw new AppError('The color_code cannot be empty');
    }

    if (!model_code) {
      throw new AppError('The model_code cannot be empty');
    }

    if (!size_code) {
      throw new AppError('The size_code cannot be empty');
    }

    const checkCategoryExists = await this.categoryRepository.findByCode(
      category_code,
    );
    if (!checkCategoryExists) {
      throw new AppError('This category not exists');
    }

    const checkColorExists = await this.colorRepository.findByCode(color_code);
    if (!checkColorExists) {
      throw new AppError('This color not exists');
    }

    const checkModelExists = await this.modelRepository.findByCode(model_code);
    if (!checkModelExists) {
      throw new AppError('This model not exists');
    }

    const checkSizeExists = await this.sizeRepository.findByCode(size_code);
    if (!checkSizeExists) {
      throw new AppError('This size not exists');
    }

    const sku = `${category_code}-${color_code}-${model_code}-${size_code}`;
    const checkSkuExists = await this.productRepository.findBySku(sku);

    if (checkSkuExists) {
      throw new AppError('This product sku already exists');
    }

    const product = await this.productRepository.create({
      sku,
      ...data,
    });

    return product;
  }
}

export default CreateProductService;
