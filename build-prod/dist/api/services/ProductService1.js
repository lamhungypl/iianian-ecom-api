'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const ProductRepository_1 = require('../repositories/ProductRepository');
let ProductService = class ProductService {
  constructor(productRepository, log) {
    this.productRepository = productRepository;
    this.log = log;
  }
};
ProductService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      ProductRepository_1.ProductRepository,
      Object,
    ]),
  ],
  ProductService
);
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService1.js.map
