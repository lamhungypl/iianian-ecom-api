import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { AddressRepository } from '../repositories/AddressRepository';
import { Address } from '../models/Address';

@Service()
export class AddressService {
  constructor(
    @OrmRepository() private addressRepository: AddressRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {}

  // create address
  public async create(address: Address): Promise<any> {
    this.log.info('Create a new address ', { address });
    return this.addressRepository.save(address);
  }

  // find Condition
  public findOne(address: any): Promise<any> {
    this.log.info('find a new address ', { address });
    return this.addressRepository.findOne(address);
  }
  // update address
  public update(id: number, address: Address): Promise<any> {
    this.log.info('update an address ', id, { address });
    address.addressId = id;
    return this.addressRepository.save(address);
  }

  // address List
  public list(
    limit: number,
    offset: number,
    whereConditions: any = [],
    count: number | boolean
  ): Promise<any> {
    const condition: any = {};

    condition.where = {};

    if (whereConditions && whereConditions.length > 0) {
      whereConditions.forEach((item: any) => {
        condition.where[item.name] = item.value;
      });
    }

    if (limit && limit > 0) {
      condition.take = limit;
      condition.skip = offset;
    }
    this.log.info('list address ', { condition });

    if (count) {
      return this.addressRepository.count(condition);
    } else {
      return this.addressRepository.find(condition);
    }
  }

  // delete address
  public async delete(id: number): Promise<any> {
    try {
      await this.addressRepository.delete(id);
      return 1;
    } catch (error) {
      this.log.info('error', error);
      return -1;
    }
  }

  // find Customer addresses
  public find(address: any): Promise<any> {
    return this.addressRepository.find(address);
  }
}
