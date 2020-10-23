import { EntityRepository, Repository } from 'typeorm';

import { Language } from '../models/language';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(Language)
export class LanguageRepository extends BaseRepository<Language> {}
