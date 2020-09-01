import { EntityRepository, Repository } from 'typeorm';
import { Order } from '../models/Order';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
  public async salesList(): Promise<any> {
    const query: any = await this.manager.createQueryBuilder(Order, 'order');
    query.select([
      'COUNT(order_id) as ordercount',
      'MONTH(created_date) as month',
      'YEAR(created_date) as year',
    ]);
    query.groupBy('month');
    query.addGroupBy('year');
    query.orderBy('year', 'ASC');
    query.addOrderBy('month', 'ASC');
    query.limit('12');
    //console.log({ salesList: query.getQuery() });
    return query.getRawMany();
  }

  public async findAllTodayOrder(todayDate: string): Promise<any> {
    const query: any = await this.manager.createQueryBuilder(Order, 'order');
    query.select(['order.total as total']);
    query.where('DATE(order.createdDate) = :todayDate', { todayDate });

    //console.log({ findAllTodayOrder: query.getQuery() });

    return query.getRawMany();
  }

  public async findAllTodayOrderCount(todayDate: string): Promise<any> {
    const query: any = await this.manager.createQueryBuilder(Order, 'order');
    query.select(['COUNT(order.orderId) as orderCount']);
    query.where('DATE(order.createdDate) = :todayDate', { todayDate });

    //console.log({ findAllTodayOrderCount: query.getQuery() });

    return query.getRawOne();
  }
}
