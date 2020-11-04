import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Like } from 'typeorm/index';
import { EmailTemplateRepository } from '../repositories/emailTemplateRepository';
import { EmailTemplate } from '../models/emailTemplate';
import { BaseService } from './base/BaseService';

@Service()
export class EmailTemplateService extends BaseService<
  EmailTemplate,
  EmailTemplateRepository
> {
  constructor(
    @InjectRepository(EmailTemplateRepository)
    repository: EmailTemplateRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
}
