import { EntityRepository, Repository } from 'typeorm';
import { ProductDiscount } from '../models/ProductDiscount';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(ProductDiscount)
export class ProductDiscountRepository extends BaseRepository<
  ProductDiscount
> {}
