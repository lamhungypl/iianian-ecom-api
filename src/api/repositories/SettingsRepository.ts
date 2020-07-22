import { EntityRepository, Repository } from 'typeorm';
import { Settings } from '../models/setting';

@EntityRepository(Settings)
export class SettingsRepository extends Repository<Settings> {}
