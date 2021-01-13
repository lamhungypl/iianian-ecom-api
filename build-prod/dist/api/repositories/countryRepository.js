'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CountryRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const country_1 = require('../models/country');
const BaseRepository_1 = require('./base/BaseRepository');
let CountryRepository = class CountryRepository extends BaseRepository_1.BaseRepository {};
CountryRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(country_1.Country)],
  CountryRepository
);
exports.CountryRepository = CountryRepository;
//# sourceMappingURL=countryRepository.js.map
