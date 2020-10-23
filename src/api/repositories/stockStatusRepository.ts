import { EntityRepository, Repository } from 'typeorm';
import { StockStatus } from '../models/stockStatus';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(StockStatus)
export class StockStatusRepository extends BaseRepository<StockStatus> {}
