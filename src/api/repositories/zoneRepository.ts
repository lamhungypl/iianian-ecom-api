import { EntityRepository, Repository } from 'typeorm';
import { Zone } from '../models/zone';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(Zone)
export class ZoneRepository extends BaseRepository<Zone> {}
