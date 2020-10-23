import { EntityRepository, Repository } from 'typeorm';
import { OrderTotal } from '../models/OrderTotal';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(OrderTotal)
export class OrderTotalRepository extends BaseRepository<OrderTotal> {}
