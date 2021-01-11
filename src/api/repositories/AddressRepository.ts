import { EntityRepository, Repository } from 'typeorm';
import { Address } from '../models/Address';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(Address)
export class AddressRepository extends BaseRepository<Address> {}
