import { EntityRepository, Repository } from 'typeorm';
import { ProductRelated } from '../models/ProductRelated';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(ProductRelated)
export class ProductRelatedRepository extends BaseRepository<ProductRelated> {}
