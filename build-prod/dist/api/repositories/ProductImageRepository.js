'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductImageRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const ProductImage_1 = require('../models/ProductImage');
const BaseRepository_1 = require('./base/BaseRepository');
let ProductImageRepository = class ProductImageRepository extends BaseRepository_1.BaseRepository {};
ProductImageRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(ProductImage_1.ProductImage)],
  ProductImageRepository
);
exports.ProductImageRepository = ProductImageRepository;
//# sourceMappingURL=ProductImageRepository.js.map
