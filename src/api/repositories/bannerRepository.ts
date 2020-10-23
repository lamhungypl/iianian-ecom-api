import { EntityRepository, Repository } from 'typeorm';
import { Banner } from '../models/banner';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(Banner)
export class BannerRepository extends BaseRepository<Banner> {}
