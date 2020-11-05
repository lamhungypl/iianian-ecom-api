import { Service } from 'typedi';
import { FindManyOptions } from 'typeorm';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { OrderProduct } from '../models/OrderProduct';
import { OrderProductRepository } from '../repositories/OrderProductRepository';
import { BaseService } from './base/BaseService';

@Service()
export class OrderProductService extends BaseService<
  OrderProduct,
  OrderProductRepository
> {
  constructor(
    @InjectRepository(OrderProductRepository)
    repository: OrderProductRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
}
