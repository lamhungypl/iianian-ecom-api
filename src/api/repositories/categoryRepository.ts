import { EntityRepository, Repository } from "typeorm";

import { Category } from "../models/categoryModel";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {}
