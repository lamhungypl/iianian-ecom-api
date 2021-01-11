import { EntityRepository, Repository } from 'typeorm';

import { Manufacturer } from '../models/manufacturerModel';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(Manufacturer)
export class ManufacturerRepository extends BaseRepository<Manufacturer> {}
