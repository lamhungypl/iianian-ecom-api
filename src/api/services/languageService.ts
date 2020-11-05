import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { LanguageRepository } from '../repositories/languageRepository';
import { Like } from 'typeorm/index';
import { Language } from '../models/language';
import { BaseService } from './base/BaseService';

@Service()
export class LanguageService extends BaseService<Language, LanguageRepository> {
  constructor(
    @InjectRepository() repository: LanguageRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
}
