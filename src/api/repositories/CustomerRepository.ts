import { EntityRepository, Repository } from 'typeorm';
import { Customer } from '../models/Customer';

@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer> {
  public async TodayCustomerCount(todayDate: string): Promise<any> {
    const query: any = await this.manager.createQueryBuilder(
      Customer,
      'customer'
    );
    query.select(['COUNT(customer.id) as customerCount']);
    query.where('DATE(customer.createdDate) = :todayDate', { todayDate });
    //console.log({ TodayCustomerCount: query.getQuery() });
    return query.getRawOne();
  }
}
