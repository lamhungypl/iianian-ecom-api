'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductViewLogService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const productViewLogRepository_1 = require('../repositories/productViewLogRepository');
const BaseService_1 = require('./base/BaseService');
let ProductViewLogService = class ProductViewLogService extends BaseService_1.BaseService {
  constructor(repository, log) {
    super(repository);
    this.log = log;
  }
};
ProductViewLogService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(
      0,
      typeorm_typedi_extensions_1.InjectRepository(
        productViewLogRepository_1.ProductViewLogRepository
      )
    ),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      productViewLogRepository_1.ProductViewLogRepository,
      Object,
    ]),
  ],
  ProductViewLogService
);
exports.ProductViewLogService = ProductViewLogService;
//# sourceMappingURL=ProductViewLogService.js.map
