import { EntityRepository, Repository } from 'typeorm';

import { CustomerWishlist } from '../models/customerWishlist';

@EntityRepository(CustomerWishlist)
export class CustomerWishlistRepository extends Repository<CustomerWishlist> {}
