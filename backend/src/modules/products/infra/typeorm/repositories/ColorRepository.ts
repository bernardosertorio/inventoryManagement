import { getRepository, Repository } from 'typeorm';

import ICreateColorDTO from '@modules/products/dtos/ICreateColorDTO';
import IColorRepository from '../../../repositories/IColorRepository';

import Color from '../entities/Color';

class ColorRepository implements IColorRepository {
  private ormRepository: Repository<Color>;

  constructor() {
    this.ormRepository = getRepository(Color);
  }

  public async create({ code, description }: ICreateColorDTO): Promise<Color> {
    const color = this.ormRepository.create({ code, description });

    await this.ormRepository.save(color);

    return color;
  }

  public async findByCode(code: string): Promise<Color | undefined> {
    const color = await this.ormRepository.findOne(code);

    return color;
  }

  public async findByDescription(
    description: string,
  ): Promise<Color | undefined> {
    const color = await this.ormRepository.findOne({
      where: { description },
    });

    return color;
  }

  public async find(): Promise<Color[]> {
    const colors = await this.ormRepository.find();

    return colors;
  }

  public async delete(code: string): Promise<void> {
    await this.ormRepository.delete(code);
  }

  public async update({
    code,
    description,
  }: ICreateColorDTO): Promise<Color | undefined> {
    const color = await this.ormRepository.findOne(code);

    if (color) {
      color.description = description;
      await this.ormRepository.save(color);
    }

    return color;
  }
}

export default ColorRepository;
