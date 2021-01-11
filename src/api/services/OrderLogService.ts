import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Like } from 'typeorm/index';
import { OrderLogRepository } from '../repositories/OrderLogRepository';
import { BaseService } from './base/BaseService';
import { OrderLog } from '../models/OrderLog';

@Service()
export class OrderLogService extends BaseService<OrderLog, OrderLogRepository> {
  constructor(
    @InjectRepository(OrderLogRepository) repository: OrderLogRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
}
