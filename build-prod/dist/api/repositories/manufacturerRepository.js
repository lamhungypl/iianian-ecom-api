'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ManufacturerRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const manufacturerModel_1 = require('../models/manufacturerModel');
const BaseRepository_1 = require('./base/BaseRepository');
let ManufacturerRepository = class ManufacturerRepository extends BaseRepository_1.BaseRepository {};
ManufacturerRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(manufacturerModel_1.Manufacturer)],
  ManufacturerRepository
);
exports.ManufacturerRepository = ManufacturerRepository;
//# sourceMappingURL=manufacturerRepository.js.map
