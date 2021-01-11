import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Like } from 'typeorm/index';
import { LoginLogRepository } from '../repositories/LoginLogRepository';
import { BaseService } from './base/BaseService';
import { LoginLog } from '../models/loginLog';

@Service()
export class LoginLogService extends BaseService<LoginLog, LoginLogRepository> {
  constructor(
    @InjectRepository() repository: LoginLogRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
  public async logList(limit: number): Promise<any[]> {
    const query = this.repository.manager.createQueryBuilder(
      LoginLog,
      'LoginLog'
    );
    query.select([
      'COUNT(LoginLog.id) as logcount',
      'DATE(created_date) as createdDate',
    ]);
    query.groupBy('createdDate');
    query.orderBy('createdDate', 'DESC');
    query.limit(limit);
    //console.log({ logList: query.getQuery() });
    return query.getRawMany();
  }
}
