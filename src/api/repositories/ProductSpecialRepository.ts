import { EntityRepository, Repository } from 'typeorm';
import { ProductSpecial } from '../models/ProductSpecial';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(ProductSpecial)
export class ProductSpecialRepository extends BaseRepository<ProductSpecial> {
  public async findSpecialPrice(
    productId: number,
    todayDate: string
  ): Promise<any> {
    const query: any = await this.manager.createQueryBuilder(
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
    query.limit('1');
    //console.log({ findSpecialPrice: query.getQuery() });
    return query.getRawOne();
  }
}
