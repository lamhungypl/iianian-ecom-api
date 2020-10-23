import { EntityRepository, Repository } from 'typeorm';
import { ProductToCategory } from '../models/ProductToCategory';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(ProductToCategory)
export class ProductToCategoryRepository extends BaseRepository<
  ProductToCategory
> {}
