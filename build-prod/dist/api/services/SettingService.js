'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.SettingService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const SettingsRepository_1 = require('../repositories/SettingsRepository');
const BaseService_1 = require('./base/BaseService');
let SettingService = class SettingService extends BaseService_1.BaseService {
  constructor(repository, log) {
    super(repository);
    this.log = log;
  }
};
SettingService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(
      0,
      typeorm_typedi_extensions_1.InjectRepository(
        SettingsRepository_1.SettingsRepository
      )
    ),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      SettingsRepository_1.SettingsRepository,
      Object,
    ]),
  ],
  SettingService
);
exports.SettingService = SettingService;
//# sourceMappingURL=SettingService.js.map
