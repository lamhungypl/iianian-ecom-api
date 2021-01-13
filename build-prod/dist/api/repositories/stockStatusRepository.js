'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.StockStatusRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const stockStatus_1 = require('../models/stockStatus');
const BaseRepository_1 = require('./base/BaseRepository');
let StockStatusRepository = class StockStatusRepository extends BaseRepository_1.BaseRepository {};
StockStatusRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(stockStatus_1.StockStatus)],
  StockStatusRepository
);
exports.StockStatusRepository = StockStatusRepository;
//# sourceMappingURL=stockStatusRepository.js.map
