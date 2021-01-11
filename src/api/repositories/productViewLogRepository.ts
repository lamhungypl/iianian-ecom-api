import { EntityRepository, Repository } from 'typeorm';
import { ProductViewLog } from '../models/productViewLog';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(ProductViewLog)
export class ProductViewLogRepository extends BaseRepository<ProductViewLog> {}
