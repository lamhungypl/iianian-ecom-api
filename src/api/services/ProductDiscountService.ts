import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { ProductDiscount } from '../models/ProductDiscount';
import { ProductDiscountRepository } from '../repositories/ProductDiscountRepository';
import { BaseService } from './base/BaseService';

@Service()
export class ProductDiscountService extends BaseService<
  ProductDiscount,
  ProductDiscountRepository
> {
  constructor(
    @InjectRepository(ProductDiscountRepository)
    repository: ProductDiscountRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
  public async findDiscountPrice(
    productId: number,
    todayDate: string
  ): Promise<any> {
    const query = this.repository.manager.createQueryBuilder(
      ProductDiscount,
      'productDiscount'
    );
    query.select(['productDiscount.price as price']);
    query.where('productDiscount.productId = ' + productId);
    query.andWhere(
      '(productDiscount.dateStart <= :todayDate AND productDiscount.dateEnd >= :todayDate)',
      { todayDate }
    );
    query.orderBy('productDiscount.priority', 'ASC');
    query.addOrderBy('productDiscount.price', 'ASC');
    query.limit(1);
    //console.log({ findDiscountPrice: query.getQuery() });
    return query.getRawOne();
  }
}
