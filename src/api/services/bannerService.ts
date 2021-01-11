import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Like } from 'typeorm/index';
import { BannerRepository } from '../repositories/bannerRepository';
import { BaseService } from './base/BaseService';
import { Banner } from '../models/banner';

@Service()
export class BannerService extends BaseService<Banner, BannerRepository> {
  constructor(
    @InjectRepository() repository: BannerRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
}
