import { getRepository, Repository } from 'typeorm';

import IModelRepository from '../../../repositories/IModelRepository';
import ICreateModelDTO from '../../../dtos/ICreateModelDTO';

import Model from '../entities/Model';

class ModelRepository implements IModelRepository {
  private ormRepository: Repository<Model>;

  constructor() {
    this.ormRepository = getRepository(Model);
  }

  public async create({ code, description }: ICreateModelDTO): Promise<Model> {
    const model = this.ormRepository.create({ code, description });

    await this.ormRepository.save(model);

    return model;
  }

  public async findByCode(code: string): Promise<Model | undefined> {
    const model = await this.ormRepository.findOne(code);

    return model;
  }

  public async findByDescription(
    description: string,
  ): Promise<Model | undefined> {
    const model = await this.ormRepository.findOne({
      where: { description },
    });

    return model;
  }

  public async find(): Promise<Model[]> {
    const modes = await this.ormRepository.find();

    return modes;
  }

  public async delete(code: string): Promise<void> {
    await this.ormRepository.delete(code);
  }

  public async update({
    code,
    description,
  }: ICreateModelDTO): Promise<Model | undefined> {
    const model = await this.ormRepository.findOne(code);

    if (model) {
      model.description = description;
      await this.ormRepository.save(model);
    }

    return model;
  }
}

export default ModelRepository;
