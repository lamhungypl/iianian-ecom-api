import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { AccessTokenRepository } from '../repositories/accessTokenRepository';
import { AccessToken } from '../models/accessTokenModel';
import { BaseService } from './base/BaseService';

@Service()
export class AccessTokenService extends BaseService<
  AccessToken,
  AccessTokenRepository
> {
  constructor(
    @InjectRepository(AccessTokenRepository) repository: AccessTokenRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
}
