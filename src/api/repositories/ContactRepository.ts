import { EntityRepository, Repository } from 'typeorm';
import { Contact } from '../models/Contact';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(Contact)
export class ContactRepository extends BaseRepository<Contact> {}
