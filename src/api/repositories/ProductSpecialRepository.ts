import { EntityRepository, Repository } from 'typeorm';
import { ProductSpecial } from '../models/ProductSpecial';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(ProductSpecial)
export class ProductSpecialRepository extends BaseRepository<ProductSpecial> {}
