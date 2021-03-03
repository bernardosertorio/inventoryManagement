import { getRepository, Repository } from 'typeorm';

import ISkuRepository from '../../../repositories/ISkuRepository';
import ICreateSkuDTO from '../../../dtos/ICreateSkuDTO';
import IFindAllSkusInProduct from '../../../dtos/IFindAllSkusInProductDTO';
import IDeleteSkuDTO from '../../../dtos/IDeleteSkuDTO';
import IPutSkuDTO from '../../../dtos/IPutSkuDTO';

import Sku from '../entities/Sku';

class SkuRepository implements ISkuRepository {
  private ormRepository: Repository<Sku>;

  constructor() {
    this.ormRepository = getRepository(Sku);
  }

  public async findAllSkusInProduct({
    product_id,
  }: IFindAllSkusInProduct): Promise<Sku[]> {
    const sku = await this.ormRepository.find({ product_id });

    return sku;
  }

  public async getSkuById(id: string): Promise<Sku | undefined> {
    const sku = await this.ormRepository.findOne(id);

    return sku;
  }

  public async getSkuByTitle(title: string): Promise<Sku | undefined> {
    const sku = await this.ormRepository.find({ title });

    return sku[0];
  }

  public async createSku(skuData: ICreateSkuDTO): Promise<Sku> {
    const sku = this.ormRepository.create(skuData);

    await this.ormRepository.save(sku);

    return sku;
  }

  public async editSku({
    title,
    sku_id,
    amount,
    sizes,
    colors,
    materials,
  }: IPutSkuDTO): Promise<Sku> {
    return this.ormRepository.save({
      id: sku_id,
      title,
      amount,
      sizes,
      colors,
      materials,
    });
  }

  public async deleteSku({ sku_id }: IDeleteSkuDTO): Promise<void> {
    await this.ormRepository.delete(sku_id);
  }
}

export default SkuRepository;
