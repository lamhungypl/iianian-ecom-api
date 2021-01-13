'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.LanguageService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const languageRepository_1 = require('../repositories/languageRepository');
const BaseService_1 = require('./base/BaseService');
let LanguageService = class LanguageService extends BaseService_1.BaseService {
  constructor(repository, log) {
    super(repository);
    this.log = log;
  }
};
LanguageService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.InjectRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      languageRepository_1.LanguageRepository,
      Object,
    ]),
  ],
  LanguageService
);
exports.LanguageService = LanguageService;
//# sourceMappingURL=languageService.js.map
