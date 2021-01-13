'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductImageService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const ProductImageRepository_1 = require('../repositories/ProductImageRepository');
const BaseService_1 = require('./base/BaseService');
let ProductImageService = class ProductImageService extends BaseService_1.BaseService {
  constructor(repository, log) {
    super(repository);
    this.log = log;
  }
  // update product images
  updateProductImage(id, productImage) {
    this.log.info('Update a productImage');
    productImage.productImageId = id;
    return this.update(id, productImage);
  }
};
ProductImageService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(
      0,
      typeorm_typedi_extensions_1.InjectRepository(
        ProductImageRepository_1.ProductImageRepository
      )
    ),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      ProductImageRepository_1.ProductImageRepository,
      Object,
    ]),
  ],
  ProductImageService
);
exports.ProductImageService = ProductImageService;
//# sourceMappingURL=ProductImageService.js.map
