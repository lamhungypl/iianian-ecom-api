'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.RatingRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const ProductRating_1 = require('../models/ProductRating');
const BaseRepository_1 = require('./base/BaseRepository');
let RatingRepository = class RatingRepository extends BaseRepository_1.BaseRepository {};
RatingRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(ProductRating_1.ProductRating)],
  RatingRepository
);
exports.RatingRepository = RatingRepository;
//# sourceMappingURL=ratingRepository.js.map
