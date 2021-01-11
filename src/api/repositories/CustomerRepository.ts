import { EntityRepository, Repository } from 'typeorm';
import { Customer } from '../models/Customer';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer> {}
