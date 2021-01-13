'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductSpecialRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const ProductSpecial_1 = require('../models/ProductSpecial');
const BaseRepository_1 = require('./base/BaseRepository');
let ProductSpecialRepository = class ProductSpecialRepository extends BaseRepository_1.BaseRepository {};
ProductSpecialRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(ProductSpecial_1.ProductSpecial)],
  ProductSpecialRepository
);
exports.ProductSpecialRepository = ProductSpecialRepository;
//# sourceMappingURL=ProductSpecialRepository.js.map
