'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.SettingsRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const setting_1 = require('../models/setting');
const BaseRepository_1 = require('./base/BaseRepository');
let SettingsRepository = class SettingsRepository extends BaseRepository_1.BaseRepository {};
SettingsRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(setting_1.Settings)],
  SettingsRepository
);
exports.SettingsRepository = SettingsRepository;
//# sourceMappingURL=SettingsRepository.js.map
