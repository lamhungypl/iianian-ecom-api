import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { OrderStatusRepository } from '../repositories/orderStatusRepository';
import { Like } from 'typeorm';
import { OrderStatus } from '../models/orderStatus';
import { BaseService } from './base/BaseService';

@Service()
export class OrderStatusService extends BaseService<
  OrderStatus,
  OrderStatusRepository
> {
  constructor(
    @Logger(__filename) private log: LoggerInterface,
    @InjectRepository(OrderStatusRepository)
    repository: OrderStatusRepository
  ) {
    super(repository);
  }
}
