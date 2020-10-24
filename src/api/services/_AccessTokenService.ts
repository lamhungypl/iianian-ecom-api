import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { AccessToken } from '../models/accessTokenModel';

import { AccessTokenRepository } from '../repositories/_AccessTokenRepository';

import { BaseService } from './base/BaseService';

@Service()
export class AccessTokenService extends BaseService<
  AccessToken,
  AccessTokenRepository
> {
  constructor(
    @Logger(__filename) private log: LoggerInterface,
    @InjectRepository(AccessTokenRepository)
    repository: AccessTokenRepository
  ) {
    super(repository);
  }
}
