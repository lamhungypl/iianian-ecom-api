import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Like } from 'typeorm/index';
import { ProductViewLogRepository } from '../repositories/productViewLogRepository';
import { ProductViewLog } from '../models/productViewLog';
import { BaseService } from './base/BaseService';

@Service()
export class ProductViewLogService extends BaseService<
  ProductViewLog,
  ProductViewLogRepository
> {
  constructor(
    @InjectRepository(ProductViewLogRepository)
    repository: ProductViewLogRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
}
