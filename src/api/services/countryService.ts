import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Country } from '../models/country';
import { CountryRepository } from '../repositories/countryRepository';
import { Like } from 'typeorm/index';
import { BaseService } from './base/BaseService';

@Service()
export class CountryService extends BaseService<Country, CountryRepository> {
  constructor(
    @InjectRepository() repository: CountryRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(repository);
  }
}
