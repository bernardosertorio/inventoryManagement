import { container } from 'tsyringe';

import '../../modules/users/providers';

import IUsersRepository from '../../modules/users/repositories/IUsersRepository';
import UsersRepository from '../../modules/users/infra/typeorm/repositories/UsersRepository';

import ICategoryRepository from '../../modules/products/repositories/ICategoryRepository';
import CategoryRepository from '../../modules/products/infra/typeorm/repositories/CategoryRepository';

import IProducRepository from '../../modules/products/repositories/IProductRepository';
import ProductRepository from '../../modules/products/infra/typeorm/repositories/ProductRepository';

import ISkuRepository from '../../modules/products/repositories/ISkuRepository';
import SkuRepository from '../../modules/products/infra/typeorm/repositories/SkuRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICategoryRepository>(
  'CategoryRepository',
  CategoryRepository,
);

container.registerSingleton<IProducRepository>(
  'ProductRepository',
  ProductRepository,
);

container.registerSingleton<ISkuRepository>('SkuRepository', SkuRepository);
