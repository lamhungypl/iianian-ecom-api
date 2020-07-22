import { EntityRepository, Repository } from 'typeorm';
import { ProductSpecial } from '../models/ProductSpecial';

@EntityRepository(ProductSpecial)
export class ProductSpecialRepository extends Repository<ProductSpecial> {
  public async findSpecialPrice(
    productId: number,
    todaydate: string
  ): Promise<any> {
    const query: any = await this.manager.createQueryBuilder(
      ProductSpecial,
      'productSpecial'
    );
    query.select(['productSpecial.price as price']);
    query.where('productSpecial.productId = ' + productId);
    query.andWhere(
      '(productSpecial.dateStart <= :todaydate AND productSpecial.dateEnd >= :todaydate)',
      { todaydate }
    );
    query.orderBy('productSpecial.priority', 'ASC');
    query.addOrderBy('productSpecial.price', 'ASC');
    query.limit('1');
    console.log(query.getQuery());
    return query.getRawOne();
  }
}
