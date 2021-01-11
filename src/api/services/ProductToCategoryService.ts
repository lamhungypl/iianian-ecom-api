import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { ProductToCategory } from '../models/ProductToCategory';
import { ProductToCategoryRepository } from '../repositories/ProductToCategoryRepository';
import { Like } from 'typeorm';
import { BaseService } from './base/BaseService';

@Service()
export class ProductToCategoryService extends BaseService<
  ProductToCategory,
  ProductToCategoryRepository
> {
  constructor(
    @InjectRepository(ProductToCategoryRepository)
    repository: ProductToCategoryRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }

  // update product
  public updateProduct(id: any, product: ProductToCategory) {
    this.log.info('Update a product');
    product.productId = id;
    return this.update(id, product);
  }
}
