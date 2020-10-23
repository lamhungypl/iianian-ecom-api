import { EntityRepository, Repository } from 'typeorm';
import { Page } from '../models/page';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(Page)
export class PageRepository extends BaseRepository<Page> {}
