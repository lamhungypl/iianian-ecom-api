import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Like } from 'typeorm/index';
import { ProductImageRepository } from '../repositories/ProductImageRepository';
import { ProductImage } from '../models/ProductImage';
import { BaseService } from './base/BaseService';

@Service()
export class ProductImageService extends BaseService<
  ProductImage,
  ProductImageRepository
> {
  constructor(
    @InjectRepository(ProductImageRepository)
    repository: ProductImageRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }

  // update product images
  public updateProductImage(id: any, productImage: ProductImage) {
    this.log.info('Update a productImage');
    productImage.productImageId = id;
    return this.update(id, productImage);
  }
}
