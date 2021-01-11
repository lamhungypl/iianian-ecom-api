import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Contact } from '../models/Contact';
import { ContactRepository } from '../repositories/ContactRepository';
import { BaseService } from './base/BaseService';

@Service()
export class ContactService extends BaseService<Contact, ContactRepository> {
  constructor(
    @InjectRepository(ContactRepository) contactRepository: ContactRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(contactRepository);
  }
}
