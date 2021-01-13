'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CustomerWishlistService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const customerWishlistRepository_1 = require('../repositories/customerWishlistRepository');
const BaseService_1 = require('./base/BaseService');
let CustomerWishlistService = class CustomerWishlistService extends BaseService_1.BaseService {
  constructor(repository, log) {
    super(repository);
    this.log = log;
  }
};
CustomerWishlistService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(
      0,
      typeorm_typedi_extensions_1.InjectRepository(
        customerWishlistRepository_1.CustomerWishlistRepository
      )
    ),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      customerWishlistRepository_1.CustomerWishlistRepository,
      Object,
    ]),
  ],
  CustomerWishlistService
);
exports.CustomerWishlistService = CustomerWishlistService;
//# sourceMappingURL=CustomerWishlistService.js.map
