'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.BannerRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const banner_1 = require('../models/banner');
const BaseRepository_1 = require('./base/BaseRepository');
let BannerRepository = class BannerRepository extends BaseRepository_1.BaseRepository {};
BannerRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(banner_1.Banner)],
  BannerRepository
);
exports.BannerRepository = BannerRepository;
//# sourceMappingURL=bannerRepository.js.map
