import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Product } from '../models/ProductModel';
import { ProductRepository } from '../repositories/ProductRepository';
import { FindManyOptions, Like, SelectQueryBuilder } from 'typeorm';
import { BaseService } from './base/BaseService';
import { get } from 'lodash';
import { OrderProduct } from '../models/OrderProduct';

export interface FindManyProductOptions extends FindManyOptions<Product> {
  categoryId?: string;
  priceOrder?: 1 | 'ASC' | 'DESC' | -1;
}

@Service()
export class ProductService extends BaseService<Product, ProductRepository> {
  constructor(
    @Logger(__filename) private log: LoggerInterface,
    @InjectRepository(ProductRepository)
    repository: ProductRepository
  ) {
    super(repository);
  }

  public async productList(
    options: FindManyProductOptions
  ): Promise<Product[]> {
    // const { categoryId, priceOrder, ...optionsFind } = options;

    const products = await this.repository.find(options);

    return products;
  }

  public async productCount(
    options: FindManyOptions<Product>
  ): Promise<number> {
    // const { categoryId, priceOrder, ...optionsFind } = options;

    const products = await this.repository.count(options);

    return products;
  }

  public async recentProductSelling(limit: number): Promise<Product[]> {
    const query = this.repository.manager.createQueryBuilder(
      OrderProduct,
      'orderProduct'
    );
    query.select([
      'COUNT(orderProduct.order_id) as orderCount',
      'orderProduct.product_id as product',
    ]);
    query.groupBy('product');
    query.orderBy('orderCount', 'DESC');
    query.limit(limit);

    return query.getRawMany();
  }

  public async productMaxPrice({
    take,
    skip,
    join,
    ...options
  }: FindManyOptions<Product>): Promise<number> {
    const query = this.repository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.productToCategory', 'productToCategory')
      .where(options.where)
      .select('MAX(product.price)', 'maxPrice');

    if (take) {
      query.limit(take);
    }
    if (skip) {
      query.offset(skip);
    }

    const { maxPrice } = await query.getRawOne();

    return maxPrice;
  }
}
