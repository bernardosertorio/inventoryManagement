import { container } from 'tsyringe';

import '../../modules/users/providers';

import IColorsRepository from '../../modules/products/repositories/IColorRepository';
import ColorsRepository from '../../modules/products/infra/typeorm/repositories/ColorRepository';

import IModelsRepository from '../../modules/products/repositories/IModelRepository';
import ModelsRepository from '../../modules/products/infra/typeorm/repositories/ModelRepository';

import ISizesRepository from '../../modules/products/repositories/ISizeRepository';
import SizesRepository from '../../modules/products/infra/typeorm/repositories/SizeRepository';

import IProductsRepository from '../../modules/products/repositories/IProductRepository';
import ProductsRepository from '../../modules/products/infra/typeorm/repositories/ProductRepository';

import ICategoriesRepository from '../../modules/products/repositories/ICategoryRepository';
import CategoriesRepository from '../../modules/products/infra/typeorm/repositories/CategoryRepository';

import IUsersRepository from '../../modules/users/repositories/IUsersRepository';
import UsersRepository from '../../modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<IColorsRepository>(
  'ColorsRepository',
  ColorsRepository,
);

container.registerSingleton<IModelsRepository>(
  'ModelsRepository',
  ModelsRepository,
);

container.registerSingleton<ISizesRepository>(
  'SizesRepository',
  SizesRepository,
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);
