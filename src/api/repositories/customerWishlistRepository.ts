import { EntityRepository, Repository } from 'typeorm';

import { CustomerWishlist } from '../models/customerWishlist';
import { BaseRepository } from './base/BaseRepository';

@EntityRepository(CustomerWishlist)
export class CustomerWishlistRepository extends BaseRepository<
  CustomerWishlist
> {}
