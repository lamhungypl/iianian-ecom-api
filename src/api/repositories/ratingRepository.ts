import { EntityRepository, Repository } from 'typeorm';
import { ProductRating } from '../models/ProductRating';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(ProductRating)
export class RatingRepository extends BaseRepository<ProductRating> {
  public async ratingConsolidate(id: number): Promise<any> {
    const consolidate = await this.manager
      .createQueryBuilder(ProductRating, 'rating')
      .select(['COUNT(rating.rating) as RatingCount'])
      .addSelect(['SUM(rating.rating) as RatingSum'])
      .where('rating.productId = :productId', { productId: id })
      .getRawOne();
    //console.log({ ratingConsolidate: consolidate.getQuery() });
    return consolidate;
  }
}
