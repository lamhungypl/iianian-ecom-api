'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductViewLogRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const productViewLog_1 = require('../models/productViewLog');
const BaseRepository_1 = require('./base/BaseRepository');
let ProductViewLogRepository = class ProductViewLogRepository extends BaseRepository_1.BaseRepository {};
ProductViewLogRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(productViewLog_1.ProductViewLog)],
  ProductViewLogRepository
);
exports.ProductViewLogRepository = ProductViewLogRepository;
//# sourceMappingURL=productViewLogRepository.js.map
