'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductToCategoryRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const ProductToCategory_1 = require('../models/ProductToCategory');
const BaseRepository_1 = require('./base/BaseRepository');
let ProductToCategoryRepository = class ProductToCategoryRepository extends BaseRepository_1.BaseRepository {};
ProductToCategoryRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(ProductToCategory_1.ProductToCategory)],
  ProductToCategoryRepository
);
exports.ProductToCategoryRepository = ProductToCategoryRepository;
//# sourceMappingURL=ProductToCategoryRepository.js.map
