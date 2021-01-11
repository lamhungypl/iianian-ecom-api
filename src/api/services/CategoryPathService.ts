import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { CategoryPath } from '../models/CategoryPath';
import { CategoryPathRepository } from '../repositories/CategoryPathRepository';
import { Logger, LoggerInterface } from '../../decorators/Logger';

import { BaseService } from './base/BaseService';

@Service()
export class CategoryPathService extends BaseService<
  CategoryPath,
  CategoryPathRepository
> {
  constructor(
    @InjectRepository(CategoryPathRepository)
    repository: CategoryPathRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
}
