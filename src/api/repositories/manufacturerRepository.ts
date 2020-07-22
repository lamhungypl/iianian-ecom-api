import { EntityRepository, Repository } from 'typeorm';

import { Manufacturer } from '../models/manufacturerModel';

@EntityRepository(Manufacturer)
export class ManufacturerRepository extends Repository<Manufacturer> {}
