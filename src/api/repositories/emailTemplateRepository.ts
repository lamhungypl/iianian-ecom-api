import { EntityRepository, Repository } from 'typeorm';
import { EmailTemplate } from '../models/emailTemplate';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(EmailTemplate)
export class EmailTemplateRepository extends BaseRepository<EmailTemplate> {}
