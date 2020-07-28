import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../models/ProductModel';
import { ProductToCategory } from '../models/ProductToCategory';
import { OrderProduct } from '../models/OrderProduct';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  public async productList(
    limit: number,
    offset: number,
    select: any = [],
    searchConditions: any = [],
    whereConditions: any = [],
    categoryId: any = [],
    priceFrom: string,
    priceTo: string,
    price: number,
    count: number | boolean
  ): Promise<any> {
    console.log(select);
    const query: any = await this.manager.createQueryBuilder(
      Product,
      'product'
    );
    // Select
    if (select && select.length > 0) {
      query.select(select);
    }

    // Keyword Search
    if (searchConditions && searchConditions.length > 0) {
      searchConditions.forEach((table: any) => {
        const operator: string = table.op;
        if (operator === 'where' && table.value !== '') {
          query.where(table.name + ' = ' + table.value);
        } else if (operator === 'and' && table.value !== '') {
          query.andWhere(table.name + ' LIKE ' + "'%" + table.value + "%'");
        } else if (operator === 'or' && table.value !== '') {
          query.orWhere(table.name + ' LIKE ' + "'%" + table.value + "%'");
        } else if (
          operator === 'andWhere' &&
          table.value !== undefined &&
          table.value !== ''
        ) {
          query.andWhere(table.name + ' = ' + table.value);
        }
      });
    }

    // Keyword Search
    if (categoryId) {
      if (whereConditions && whereConditions.length > 0) {
        whereConditions.forEach((table: any) => {
          const operator: string = table.op;
          if (operator === 'where' && table.value !== undefined) {
            const subQb = this.manager
              .getRepository(ProductToCategory)
              .createQueryBuilder('productToCategory')
              .select('product_id')
              .where('category_id = ' + table.value);
            query.andWhere(table.name + ' IN (' + subQb.getSql() + ')');
          }
        });
      }
    }

    if (priceFrom || priceTo) {
      console.log({ priceFrom, priceTo });
      const minPrice = parseInt(priceFrom) || 0;
      if (priceTo) {
        const maxPrice = parseInt(priceTo);
        query.andWhere(
          '(product.price >= :priceFrom AND product.price <= :priceTo)',
          {
            priceFrom: minPrice,
            priceTo: maxPrice,
          }
        );
      } else {
        query.andWhere('(product.price >= :priceFrom )', {
          priceFrom: minPrice,
        });
      }
    }

    if (price) {
      query.orderBy('product.price', price === 1 ? 'ASC' : 'DESC');
    }

    query.orderBy('product.sortOrder', 'ASC');

    // Limit & Offset
    if (limit && limit > 0) {
      query.limit(limit);
      query.offset(offset);
    }
    console.log({ productList_Repo: query.getQuery() });
    if (count) {
      return query.getCount();
    }

    return query.getMany();
  }

  public async recentProductSelling(limit: number): Promise<any> {
    const query: any = await this.manager.createQueryBuilder(
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
    console.log({ recentProductSelling: query.getQuery() });
    return query.getRawMany();
  }

  public async productMaxPrice(maximum: any): Promise<any> {
    const query: any = await this.manager.createQueryBuilder(
      Product,
      'product'
    );
    query.select(maximum);
    console.log({ productMaxPrice: query.getQuery() });

    return query.getRawOne();
  }
}
