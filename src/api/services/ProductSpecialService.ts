import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { ProductSpecial } from '../models/ProductSpecial';
import { ProductSpecialRepository } from '../repositories/ProductSpecialRepository';
import { BaseService } from './base/BaseService';

@Service()
export class ProductSpecialService extends BaseService<
  ProductSpecial,
  ProductSpecialRepository
> {
  constructor(
    @InjectRepository(ProductSpecialRepository)
    repository: ProductSpecialRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
  public async findSpecialPrice(
    productId: number,
    todayDate: string
  ): Promise<any> {
    const query = this.repository.manager.createQueryBuilder(
      ProductSpecial,
      'productSpecial'
    );
    query.select(['productSpecial.price as price']);
    query.where('productSpecial.product_id = ' + productId);
    query.andWhere(
      '(productSpecial.dateStart <= :todayDate AND productSpecial.dateEnd >= :todayDate)',
      { todayDate }
    );
    query.orderBy('productSpecial.priority', 'ASC');
    query.addOrderBy('productSpecial.price', 'ASC');
    query.limit(1);
    //console.log({ findSpecialPrice: query.getQuery() });
    return query.getRawOne();
  }
}
