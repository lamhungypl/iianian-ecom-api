'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.PageService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const pageRepository_1 = require('../repositories/pageRepository');
const BaseService_1 = require('./base/BaseService');
let PageService = class PageService extends BaseService_1.BaseService {
  constructor(repository, log) {
    super(repository);
    this.log = log;
  }
};
PageService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(
      0,
      typeorm_typedi_extensions_1.InjectRepository(
        pageRepository_1.PageRepository
      )
    ),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      pageRepository_1.PageRepository,
      Object,
    ]),
  ],
  PageService
);
exports.PageService = PageService;
//# sourceMappingURL=pageService.js.map
