import { EntityRepository, Repository } from "typeorm";
import { ProductRating } from "../models/ProductRating";

@EntityRepository(ProductRating)
export class RatingRepository extends Repository<ProductRating> {
    public async ratingConsolidate(id: number): Promise<any> {
        const consolidate = await this.manager
            .createQueryBuilder(ProductRating, "rating")
            .select(["COUNT(rating.rating) as RatingCount"])
            .addSelect(["SUM(rating.rating) as RatingSum"])
            .where("rating.productId = :productId", { productId: id })
            .getRawOne();
        return consolidate;
    }
}
