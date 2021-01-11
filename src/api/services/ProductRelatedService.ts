import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { ProductRelated } from '../models/ProductRelated';
import { ProductRelatedRepository } from '../repositories/ProductRelatedRepository';
import { BaseService } from './base/BaseService';

@Service()
export class ProductRelatedService extends BaseService<
  ProductRelated,
  ProductRelatedRepository
> {
  constructor(
    @InjectRepository() repository: ProductRelatedRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
}
