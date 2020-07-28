import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { CustomerWishlist } from '../models/customerWishlist';
import { CustomerWishlistRepository } from '../repositories/customerWishlistRepository';

@Service()
export class CustomerWishlistService {
  constructor(
    @OrmRepository()
    private customerWishlistRepository: CustomerWishlistRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {}

  public async create(productData: any): Promise<CustomerWishlist> {
    this.log.info('create a wishlist product');
    return this.customerWishlistRepository.save(productData);
  }

  // find Condition
  public findOne(customer: any): Promise<any> {
    this.log.info('findOne wishlist product', customer);

    return this.customerWishlistRepository.findOne(customer);
  }

  // delete customer wishlist
  public async delete(id: number): Promise<any> {
    this.log.info('delete wishlist product', id);

    this.log.info('delete a wishlist product');
    return await this.customerWishlistRepository.delete(id);
  }

  // customer wishlist
  public list(
    limit: number,
    offset: number,
    select: any = [],
    whereConditions: any = [],
    count: number | boolean
  ): Promise<any> {
    const condition: any = {};
    if (select && select.length > 0) {
      condition.select = select;
    }

    if (whereConditions && whereConditions.length > 0) {
      condition.where = whereConditions;
    }

    if (limit && limit > 0) {
      condition.take = limit;
      condition.skip = offset;
    }

    this.log.info('list customer wishlist ', { condition });

    if (count) {
      return this.customerWishlistRepository.count(condition);
    }
    return this.customerWishlistRepository.find(condition);
  }
  // find customer
  public async find(customerId: any): Promise<any> {
    this.log.info('Find a customer');
    return this.customerWishlistRepository.find(customerId);
  }
}
