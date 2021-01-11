import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';

import { User } from '../models/User';
import { UserRepository } from '../repositories/UserRepository';
import { BaseService } from './base/BaseService';

@Service()
export class UserService extends BaseService<User, UserRepository> {
  constructor(
    @Logger(__filename) private log: LoggerInterface,
    @InjectRepository(UserRepository)
    repository: UserRepository
  ) {
    super(repository);
  }
}
