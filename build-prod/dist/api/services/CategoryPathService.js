'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CategoryPathService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const CategoryPathRepository_1 = require('../repositories/CategoryPathRepository');
const Logger_1 = require('../../decorators/Logger');
const BaseService_1 = require('./base/BaseService');
let CategoryPathService = class CategoryPathService extends BaseService_1.BaseService {
  constructor(repository, log) {
    super(repository);
    this.log = log;
  }
};
CategoryPathService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(
      0,
      typeorm_typedi_extensions_1.InjectRepository(
        CategoryPathRepository_1.CategoryPathRepository
      )
    ),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      CategoryPathRepository_1.CategoryPathRepository,
      Object,
    ]),
  ],
  CategoryPathService
);
exports.CategoryPathService = CategoryPathService;
//# sourceMappingURL=CategoryPathService.js.map
