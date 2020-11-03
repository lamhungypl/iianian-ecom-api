import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Settings } from '../models/setting';
import { SettingsRepository } from '../repositories/SettingsRepository';
import { Like } from 'typeorm';
import { BaseService } from './base/BaseService';

@Service()
export class SettingService extends BaseService<Settings, SettingsRepository> {
  constructor(
    @InjectRepository(SettingsRepository) repository: SettingsRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
}
