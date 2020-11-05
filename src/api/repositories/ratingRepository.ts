import { EntityRepository, Repository } from 'typeorm';
import { ProductRating } from '../models/ProductRating';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(ProductRating)
export class RatingRepository extends BaseRepository<ProductRating> {}
