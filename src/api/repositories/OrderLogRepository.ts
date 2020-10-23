import { EntityRepository, Repository } from 'typeorm';
import { OrderLog } from '../models/OrderLog';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(OrderLog)
export class OrderLogRepository extends BaseRepository<OrderLog> {}
