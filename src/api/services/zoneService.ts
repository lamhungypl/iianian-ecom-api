import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Like } from 'typeorm/index';
import { ZoneRepository } from '../repositories/zoneRepository';
import { Zone } from '../models/zone';
import { BaseService } from './base/BaseService';

@Service()
export class ZoneService extends BaseService<Zone, ZoneRepository> {
  constructor(
    @InjectRepository() repository: ZoneRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
}
