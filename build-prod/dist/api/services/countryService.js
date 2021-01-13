'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CountryService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const countryRepository_1 = require('../repositories/countryRepository');
const BaseService_1 = require('./base/BaseService');
let CountryService = class CountryService extends BaseService_1.BaseService {
  constructor(repository, log) {
    super(repository);
    this.log = log;
  }
};
CountryService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(
      0,
      typeorm_typedi_extensions_1.InjectRepository(
        countryRepository_1.CountryRepository
      )
    ),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      countryRepository_1.CountryRepository,
      Object,
    ]),
  ],
  CountryService
);
exports.CountryService = CountryService;
//# sourceMappingURL=countryService.js.map
