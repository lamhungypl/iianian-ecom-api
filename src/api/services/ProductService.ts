import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Product } from '../models/ProductModel';
import { ProductRepository } from '../repositories/ProductRepository';
import { FindManyOptions, Like } from 'typeorm';
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
    const { categoryId, priceOrder, ...optionsFind } = options;

    const products = await this.repository.find({
      ...optionsFind,
      join: {
        alias: 'product',
        innerJoinAndSelect: {
          productToCategory: 'product.productId',
        },
      },
      order: {
        name: 'ASC',
        price: priceOrder,
      },
    });

    return products;
  }

  public async productCount(options: FindManyProductOptions): Promise<number> {
    const { categoryId, priceOrder, ...optionsFind } = options;

    const products = await this.repository.count({
      ...optionsFind,
      // join: {
      //   alias: 'product',
      //   innerJoinAndSelect: {
      //     productToCategory: 'product.productId',
      //   },
      // },
      // order: {
      //   name: 'ASC',
      //   price: priceOrder,
      // },
    });

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

  public async productMaxPrice(maximum: any): Promise<any> {
    const query = this.repository.manager.createQueryBuilder(
      Product,
      'product'
    );
    query.select(maximum);
    //console.log({ productMaxPrice: query.getQuery() });

    return query.getRawOne();
  }
}
