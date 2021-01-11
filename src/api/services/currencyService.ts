import { Service } from 'typedi';
import { InjectRepository, OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Like } from 'typeorm/index';
import { CurrencyRepository } from '../repositories/currencyRepository';
import { BaseService } from './base/BaseService';
import { Currency } from '../models/currency';

@Service()
export class CurrencyService extends BaseService<Currency, CurrencyRepository> {
  constructor(
    @InjectRepository(CurrencyRepository)
    currencyRepository: CurrencyRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {
    super(currencyRepository);
  }
}
