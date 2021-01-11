import { EntityRepository, Repository } from 'typeorm';
import { Settings } from '../models/setting';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(Settings)
export class SettingsRepository extends BaseRepository<Settings> {}
