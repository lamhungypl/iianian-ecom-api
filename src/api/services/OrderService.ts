import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Like } from 'typeorm/index';
import { OrderRepository } from '../repositories/OrderRepository';
import { BaseService } from './base/BaseService';
import { Order } from '../models/Order';

@Service()
export class OrderService extends BaseService<Order, OrderRepository> {
  constructor(
    @Logger(__filename) private log: LoggerInterface,
    @InjectRepository(OrderRepository)
    repository: OrderRepository
  ) {
    super(repository);
  }

  // find today orders
  public async findAllTodayOrder(todayDate: string) {
    const query = this.repository.manager.createQueryBuilder(Order, 'order');
    query.select([' SUM(order.total) as total']);
    query.where('DATE(order.createdDate) = :todayDate', { todayDate });
    return query.getOne();
  }

  public async salesList() {
    const query = this.repository.manager.createQueryBuilder(Order, 'order');
    query.select([
      'COUNT(order_id) as orderCount',
      'MONTH(created_date) as month',
      'YEAR(created_date) as year',
    ]);
    query.groupBy('month');
    query.addGroupBy('year');
    query.orderBy('year', 'ASC');
    query.addOrderBy('month', 'ASC');
    query.limit(12);
    return query.getRawMany();
  }

  public async findAllTodayOrderCount(todayDate: string) {
    const query = this.repository.manager.createQueryBuilder(Order, 'order');
    query.select(['COUNT(order.orderId) as orderCount']);
    query.where('DATE(order.createdDate) = :todayDate', { todayDate });
    return query.getRawOne<number>();
  }
}
