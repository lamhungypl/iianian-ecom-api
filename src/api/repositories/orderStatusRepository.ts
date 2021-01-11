import { EntityRepository, Repository } from 'typeorm';
import { OrderStatus } from '../models/orderStatus';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(OrderStatus)
export class OrderStatusRepository extends BaseRepository<OrderStatus> {}
