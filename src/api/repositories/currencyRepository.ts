import { EntityRepository, Repository } from 'typeorm';
import { Currency } from '../models/currency';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(Currency)
export class CurrencyRepository extends BaseRepository<Currency> {}
