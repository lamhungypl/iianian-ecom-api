import { EntityRepository, Repository } from 'typeorm';
import { EmailTemplate } from '../models/emailTemplate';

@EntityRepository(EmailTemplate)
export class EmailTemplateRepository extends Repository<EmailTemplate> {}
