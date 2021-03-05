import ICreateSkuDTO from '../dtos/ICreateSkuDTO';
import IPutSkuDTO from '../dtos/IPutSkuDTO';
import IFindAllSkusInProductDTO from '../dtos/Sku/IFindAllSkusInProductDTO';
import IDeleteSkuDTO from '../dtos/IDeleteSkuDTO';

import Sku from '../infra/typeorm/entities/Sku';

export default interface ISkuRepository {
  createSku(data: ICreateSkuDTO): Promise<Sku>;
  getSkuByTitle(title: string): Promise<Sku | undefined>;
  findAllSkusInProduct(product_id: IFindAllSkusInProductDTO): Promise<Sku[]>;
  getSkuById(sku_id: string): Promise<Sku | undefined>;
  editSku(data: IPutSkuDTO): Promise<Sku | undefined>;
  deleteSku(data: IDeleteSkuDTO): Promise<void>;
}
