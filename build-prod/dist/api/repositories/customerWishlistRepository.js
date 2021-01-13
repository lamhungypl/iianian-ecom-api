'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CustomerWishlistRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const customerWishlist_1 = require('../models/customerWishlist');
const BaseRepository_1 = require('./base/BaseRepository');
let CustomerWishlistRepository = class CustomerWishlistRepository extends BaseRepository_1.BaseRepository {};
CustomerWishlistRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(customerWishlist_1.CustomerWishlist)],
  CustomerWishlistRepository
);
exports.CustomerWishlistRepository = CustomerWishlistRepository;
//# sourceMappingURL=customerWishlistRepository.js.map
