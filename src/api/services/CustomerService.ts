import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Like } from 'typeorm/index';
import { CustomerRepository } from '../repositories/CustomerRepository';
import { BaseService } from './base/BaseService';
import { Customer } from '../models/Customer';

@Service()
export class CustomerService extends BaseService<Customer, CustomerRepository> {
  constructor(
    @Logger(__filename) private log: LoggerInterface,
    @InjectRepository(CustomerRepository)
    repository: CustomerRepository
  ) {
    super(repository);
  }

  public todayCustomerCount(todayDate: string) {
    const query = this.repository.manager.createQueryBuilder(
      Customer,
      'customer'
    );
    query.select(['COUNT(customer.id) as customerCount']);
    query.where('DATE(customer.createdDate) = :todayDate', { todayDate });
    //console.log({ TodayCustomerCount: query.getQuery() });
    return query.getRawOne();
  }
}
