import { EntityRepository, Repository } from 'typeorm';
import { Order } from '../models/Order';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {}
