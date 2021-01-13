'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CategoryService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const categoryRepository_1 = require('../repositories/categoryRepository');
const BaseService_1 = require('./base/BaseService');
let CategoryService = class CategoryService extends BaseService_1.BaseService {
  constructor(repository, log) {
    super(repository);
    this.log = log;
  }
};
CategoryService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(
      0,
      typeorm_typedi_extensions_1.InjectRepository(
        categoryRepository_1.CategoryRepository
      )
    ),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      categoryRepository_1.CategoryRepository,
      Object,
    ]),
  ],
  CategoryService
);
exports.CategoryService = CategoryService;
//# sourceMappingURL=categoryService.js.map
