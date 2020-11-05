import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { CustomerWishlist } from '../models/customerWishlist';
import { CustomerWishlistRepository } from '../repositories/customerWishlistRepository';
import { BaseService } from './base/BaseService';

@Service()
export class CustomerWishlistService extends BaseService<
  CustomerWishlist,
  CustomerWishlistRepository
> {
  constructor(
    @InjectRepository(CustomerWishlistRepository)
    repository: CustomerWishlistRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
}
