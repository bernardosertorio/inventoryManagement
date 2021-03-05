import { getRepository, Repository } from 'typeorm';

import IFindAllSkusInProductDTO from '../../../dtos/Sku/IFindAllSkusInProductDTO';
import ISkuRepository from '../../../repositories/ISkuRepository';
import ICreateSkuDTO from '../../../dtos/Sku/ICreateSkuDTO';
import IDeleteSkuDTO from '../../../dtos/Sku/IDeleteSkuDTO';
import IPutSkuDTO from '../../../dtos/Sku/IPutSkuDTO';

import Sku from '../entities/Sku';

class SkuRepository implements ISkuRepository {
  private ormRepository: Repository<Sku>;

  constructor() {
    this.ormRepository = getRepository(Sku);
  }

  public async getSkuById(id: string): Promise<Sku | undefined> {
    const sku = await this.ormRepository.findOne(id);

    return sku;
  }

  public async getSkuByTitle(title: string): Promise<Sku | undefined> {
    const findSku = await this.ormRepository.findOne({ where: { title } });

    return findSku;
  }

  public async findAllSkusInProduct({
    product_id,
  }: IFindAllSkusInProductDTO): Promise<Sku[]> {
    const skus = await this.ormRepository.find({ product_id });

    return skus;
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
    size_P,
    size_M,
    size_G,
    size_GG,
    colors,
    materials,
  }: IPutSkuDTO): Promise<Sku> {
    return this.ormRepository.save({
      id: sku_id,
      title,
      amount,
      size_P,
      size_M,
      size_G,
      size_GG,
      colors,
      materials,
    });
  }

  public async deleteSku({ sku_id }: IDeleteSkuDTO): Promise<void> {
    await this.ormRepository.delete(sku_id);
  }
}

export default SkuRepository;
