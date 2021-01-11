import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Category } from '../models/categoryModel';
import { CategoryRepository } from '../repositories/categoryRepository';
import { Like } from 'typeorm/index';
import { BaseService } from './base/BaseService';

@Service()
export class CategoryService extends BaseService<Category, CategoryRepository> {
  constructor(
    @InjectRepository(CategoryRepository) repository: CategoryRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
}
