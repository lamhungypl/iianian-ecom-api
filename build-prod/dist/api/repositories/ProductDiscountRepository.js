'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductDiscountRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const ProductDiscount_1 = require('../models/ProductDiscount');
const BaseRepository_1 = require('./base/BaseRepository');
let ProductDiscountRepository = class ProductDiscountRepository extends BaseRepository_1.BaseRepository {};
ProductDiscountRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(ProductDiscount_1.ProductDiscount)],
  ProductDiscountRepository
);
exports.ProductDiscountRepository = ProductDiscountRepository;
//# sourceMappingURL=ProductDiscountRepository.js.map
