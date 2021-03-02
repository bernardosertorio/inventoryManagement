import Sku from '../infra/typeorm/entities/Sku';
import ICreateSkuDTO from '../dtos/ICreateSkuDTO';
import IFindAllSkusInProductDTO from '../dtos/IFindAllSkusInProductDTO';
import IPutSkuDTO from '../dtos/IPutSkuDTO';
import IDeleteSkuDTO from '../dtos/IDeleteSkuDTO';

export default interface ISkuRepository {
  createSku(data: ICreateSkuDTO): Promise<Sku>;
  findAllSkusInProduct(product_id: IFindAllSkusInProductDTO): Promise<Sku[]>;
  getSkuById(sku_id: string): Promise<Sku | undefined>;
  editSku(data: IPutSkuDTO): Promise<Sku | undefined>;
  deleteSku(data: IDeleteSkuDTO): Promise<void>;
}
