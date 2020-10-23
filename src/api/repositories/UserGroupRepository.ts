import { EntityRepository, Repository } from 'typeorm';
import { UserGroup } from '../models/UserGroup';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(UserGroup)
export class UserGroupRepository extends BaseRepository<UserGroup> {}
