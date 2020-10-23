import { EntityRepository, Repository } from 'typeorm';
import { ProductImage } from '../models/ProductImage';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(ProductImage)
export class ProductImageRepository extends BaseRepository<ProductImage> {}
