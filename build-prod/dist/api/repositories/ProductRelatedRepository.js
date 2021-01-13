'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductRelatedRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const ProductRelated_1 = require('../models/ProductRelated');
const BaseRepository_1 = require('./base/BaseRepository');
let ProductRelatedRepository = class ProductRelatedRepository extends BaseRepository_1.BaseRepository {};
ProductRelatedRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(ProductRelated_1.ProductRelated)],
  ProductRelatedRepository
);
exports.ProductRelatedRepository = ProductRelatedRepository;
//# sourceMappingURL=ProductRelatedRepository.js.map
