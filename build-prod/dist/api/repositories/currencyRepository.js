'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CurrencyRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const currency_1 = require('../models/currency');
const BaseRepository_1 = require('./base/BaseRepository');
let CurrencyRepository = class CurrencyRepository extends BaseRepository_1.BaseRepository {};
CurrencyRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(currency_1.Currency)],
  CurrencyRepository
);
exports.CurrencyRepository = CurrencyRepository;
//# sourceMappingURL=currencyRepository.js.map
