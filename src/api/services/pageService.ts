import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Like } from 'typeorm/index';
import { PageRepository } from '../repositories/pageRepository';
import { Page } from '../models/page';
import { BaseService } from './base/BaseService';

@Service()
export class PageService extends BaseService<Page, PageRepository> {
  constructor(
    @InjectRepository(PageRepository) repository: PageRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
}
