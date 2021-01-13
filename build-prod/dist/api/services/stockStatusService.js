'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.StockStatusService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const stockStatusRepository_1 = require('../repositories/stockStatusRepository');
const BaseService_1 = require('./base/BaseService');
let StockStatusService = class StockStatusService extends BaseService_1.BaseService {
  constructor(repository, log) {
    super(repository);
    this.log = log;
  }
};
StockStatusService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(
      0,
      typeorm_typedi_extensions_1.InjectRepository(
        stockStatusRepository_1.StockStatusRepository
      )
    ),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      stockStatusRepository_1.StockStatusRepository,
      Object,
    ]),
  ],
  StockStatusService
);
exports.StockStatusService = StockStatusService;
//# sourceMappingURL=stockStatusService.js.map
