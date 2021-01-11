import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { StockStatusRepository } from '../repositories/stockStatusRepository';
import { Like } from 'typeorm/index';
import { StockStatus } from '../models/stockStatus';
import { BaseService } from './base/BaseService';

@Service()
export class StockStatusService extends BaseService<
  StockStatus,
  StockStatusRepository
> {
  constructor(
    @InjectRepository(StockStatusRepository) repository: StockStatusRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
}
