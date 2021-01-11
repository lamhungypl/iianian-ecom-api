import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { ProductRating } from '../models/ProductRating';
import { RatingRepository } from '../repositories/ratingRepository';
import { Like } from 'typeorm';
import { BaseService } from './base/BaseService';

@Service()
export class ProductRatingService extends BaseService<
  ProductRating,
  RatingRepository
> {
  constructor(
    @InjectRepository(RatingRepository) ratingRepository: RatingRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(ratingRepository);
  }

  public async ratingConsolidate(id: number): Promise<any> {
    const consolidate = await this.repository.manager
      .createQueryBuilder(ProductRating, 'rating')
      .select(['COUNT(rating.rating) as RatingCount'])
      .addSelect(['SUM(rating.rating) as RatingSum'])
      .where('rating.productId = :productId', { productId: id })
      .getRawOne();

    return consolidate;
  }
}
