'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CurrencyService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const currencyRepository_1 = require('../repositories/currencyRepository');
const BaseService_1 = require('./base/BaseService');
let CurrencyService = class CurrencyService extends BaseService_1.BaseService {
  constructor(currencyRepository, log) {
    super(currencyRepository);
    this.log = log;
  }
};
CurrencyService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(
      0,
      typeorm_typedi_extensions_1.InjectRepository(
        currencyRepository_1.CurrencyRepository
      )
    ),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      currencyRepository_1.CurrencyRepository,
      Object,
    ]),
  ],
  CurrencyService
);
exports.CurrencyService = CurrencyService;
//# sourceMappingURL=currencyService.js.map
