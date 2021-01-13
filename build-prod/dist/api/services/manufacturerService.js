'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ManufacturerService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const manufacturerRepository_1 = require('../repositories/manufacturerRepository');
const BaseService_1 = require('./base/BaseService');
let ManufacturerService = class ManufacturerService extends BaseService_1.BaseService {
  constructor(repository, log) {
    super(repository);
    this.log = log;
  }
};
ManufacturerService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(
      0,
      typeorm_typedi_extensions_1.InjectRepository(
        manufacturerRepository_1.ManufacturerRepository
      )
    ),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      manufacturerRepository_1.ManufacturerRepository,
      Object,
    ]),
  ],
  ManufacturerService
);
exports.ManufacturerService = ManufacturerService;
//# sourceMappingURL=manufacturerService.js.map
