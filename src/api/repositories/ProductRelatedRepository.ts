import { EntityRepository, Repository } from "typeorm";
import { ProductRelated } from "../models/ProductRelated";

@EntityRepository(ProductRelated)
export class ProductRelatedRepository extends Repository<ProductRelated> {}
