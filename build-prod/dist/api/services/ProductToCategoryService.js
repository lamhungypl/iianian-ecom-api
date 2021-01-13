'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductToCategoryService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const ProductToCategoryRepository_1 = require('../repositories/ProductToCategoryRepository');
const BaseService_1 = require('./base/BaseService');
let ProductToCategoryService = class ProductToCategoryService extends BaseService_1.BaseService {
  constructor(repository, log) {
    super(repository);
    this.log = log;
  }
  // update product
  updateProduct(id, product) {
    this.log.info('Update a product');
    product.productId = id;
    return this.update(id, product);
  }
};
ProductToCategoryService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(
      0,
      typeorm_typedi_extensions_1.InjectRepository(
        ProductToCategoryRepository_1.ProductToCategoryRepository
      )
    ),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      ProductToCategoryRepository_1.ProductToCategoryRepository,
      Object,
    ]),
  ],
  ProductToCategoryService
);
exports.ProductToCategoryService = ProductToCategoryService;
//# sourceMappingURL=ProductToCategoryService.js.map
