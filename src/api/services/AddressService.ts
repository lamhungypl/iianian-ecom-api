import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { AddressRepository } from '../repositories/AddressRepository';
import { Address } from '../models/Address';
import { BaseService } from './base/BaseService';

@Service()
export class AddressService extends BaseService<Address, AddressRepository> {
  constructor(
    @InjectRepository(AddressRepository) repository: AddressRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
}
