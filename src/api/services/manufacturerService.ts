import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Manufacturer } from '../models/manufacturerModel';
import { ManufacturerRepository } from '../repositories/manufacturerRepository';
import { Like } from 'typeorm/index';
import { BaseService } from './base/BaseService';

@Service()
export class ManufacturerService extends BaseService<
  Manufacturer,
  ManufacturerRepository
> {
  constructor(
    @InjectRepository(ManufacturerRepository)
    repository: ManufacturerRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
}
