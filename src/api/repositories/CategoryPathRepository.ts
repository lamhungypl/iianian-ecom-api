import { EntityRepository, Repository } from 'typeorm';

import { CategoryPath } from '../models/CategoryPath';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(CategoryPath)
export class CategoryPathRepository extends BaseRepository<CategoryPath> {}
