import { EntityRepository, Repository } from 'typeorm';

import { LoginLog } from '../models/loginLog';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(LoginLog)
export class LoginLogRepository extends BaseRepository<LoginLog> {}
