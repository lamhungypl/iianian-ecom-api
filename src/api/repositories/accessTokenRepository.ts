import { EntityRepository, Repository } from 'typeorm';
import { AccessToken } from '../models/accessTokenModel';

@EntityRepository(AccessToken)
export class AccessTokenRepository extends Repository<AccessToken> {}
