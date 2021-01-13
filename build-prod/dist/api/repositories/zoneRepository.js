'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ZoneRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const zone_1 = require('../models/zone');
const BaseRepository_1 = require('./base/BaseRepository');
let ZoneRepository = class ZoneRepository extends BaseRepository_1.BaseRepository {};
ZoneRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(zone_1.Zone)],
  ZoneRepository
);
exports.ZoneRepository = ZoneRepository;
//# sourceMappingURL=zoneRepository.js.map
