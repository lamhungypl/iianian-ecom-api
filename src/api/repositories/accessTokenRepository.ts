import { EntityRepository, Repository } from 'typeorm';
import { AccessToken } from '../models/accessTokenModel';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(AccessToken)
export class AccessTokenRepository extends BaseRepository<AccessToken> {}
