'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ZoneService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const zoneRepository_1 = require('../repositories/zoneRepository');
const BaseService_1 = require('./base/BaseService');
let ZoneService = class ZoneService extends BaseService_1.BaseService {
  constructor(repository, log) {
    super(repository);
    this.log = log;
  }
};
ZoneService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.InjectRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      zoneRepository_1.ZoneRepository,
      Object,
    ]),
  ],
  ZoneService
);
exports.ZoneService = ZoneService;
//# sourceMappingURL=zoneService.js.map
