import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { UserGroup } from '../models/UserGroup';
import { UserGroupRepository } from '../repositories/UserGroupRepository';
import { Like } from 'typeorm';
import { BaseService } from './base/BaseService';

@Service()
export class UserGroupService extends BaseService<
  UserGroup,
  UserGroupRepository
> {
  constructor(
    @InjectRepository(UserGroupRepository) repository: UserGroupRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
}
