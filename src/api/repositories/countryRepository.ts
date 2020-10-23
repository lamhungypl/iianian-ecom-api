import { EntityRepository, Repository } from 'typeorm';
import { Country } from '../models/country';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(Country)
export class CountryRepository extends BaseRepository<Country> {}
