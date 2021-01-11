import { BaseModel } from '../../models/BaseModel';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository()
export class BaseRepository<T extends BaseModel> extends Repository<T> {}
