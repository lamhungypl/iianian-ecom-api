import { EntityRepository, Repository } from "typeorm";
import { ProductDiscount } from "../models/ProductDiscount";

@EntityRepository(ProductDiscount)
export class ProductDiscountRepository extends Repository<ProductDiscount> {
    public async findDiscountPrice(productId: number, todaydate: string): Promise<any> {
        const query: any = await this.manager.createQueryBuilder(
            ProductDiscount,
            "productDiscount"
        );
        query.select(["productDiscount.price as price"]);
        query.where("productDiscount.productId = " + productId);
        query.andWhere(
            "(productDiscount.dateStart <= :todaydate AND productDiscount.dateEnd >= :todaydate)",
            { todaydate }
        );
        query.orderBy("productDiscount.priority", "ASC");
        query.addOrderBy("productDiscount.price", "ASC");
        query.limit("1");
        console.log(query.getQuery());
        return query.getRawOne();
    }
}
