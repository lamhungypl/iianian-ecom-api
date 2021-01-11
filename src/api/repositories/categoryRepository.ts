import { EntityRepository, Repository } from 'typeorm';

import { Category } from '../models/categoryModel';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(Category)
export class CategoryRepository extends BaseRepository<Category> {}
