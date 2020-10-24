import {
  FindManyOptions,
  FindOneOptions,
  Repository,
  UpdateResult,
} from 'typeorm';

import { BaseModel } from '../../models/BaseModel';

export interface BaseServiceImpl<T> {
  create(newModel: T): Promise<T>;

  update(id: number | string, newModel: T): Promise<UpdateResult>;

  findOne(options?: FindOneOptions<T>): Promise<T>;

  delete(id: number | string): Promise<number>;

  list(options: FindManyOptions<T>): Promise<T[]>;
  count(options: FindManyOptions<T>): Promise<number>;
}

export class BaseService<T extends BaseModel, R extends Repository<T>>
  implements BaseServiceImpl<T> {
  protected readonly repository: R;
  constructor(repository: R) {
    this.repository = repository;
  }
  public create(newModel: T) {
    return this.repository.save(newModel as any);
  }

  public update(id: number | string, newModel: T) {
    return this.repository.update(id, newModel as any);
  }

  public findOne(options?: FindOneOptions<T>) {
    return this.repository.findOne(options);
  }

  public async delete(id: number | string) {
    try {
      await this.repository.delete(id);
      return 1;
    } catch (error) {
      return -1;
    }
  }

  public list(options: FindManyOptions<T>) {
    return this.repository.find(options);
  }
  public count(options: FindManyOptions<T>) {
    return this.repository.count(options);
  }
}
