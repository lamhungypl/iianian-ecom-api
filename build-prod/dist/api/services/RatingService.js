'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductRatingService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const ProductRating_1 = require('../models/ProductRating');
const ratingRepository_1 = require('../repositories/ratingRepository');
const BaseService_1 = require('./base/BaseService');
let ProductRatingService = class ProductRatingService extends BaseService_1.BaseService {
  constructor(ratingRepository, log) {
    super(ratingRepository);
    this.log = log;
  }
  ratingConsolidate(id) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const consolidate = yield this.repository.manager
        .createQueryBuilder(ProductRating_1.ProductRating, 'rating')
        .select(['COUNT(rating.rating) as RatingCount'])
        .addSelect(['SUM(rating.rating) as RatingSum'])
        .where('rating.productId = :productId', { productId: id })
        .getRawOne();
      return consolidate;
    });
  }
};
ProductRatingService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(
      0,
      typeorm_typedi_extensions_1.InjectRepository(
        ratingRepository_1.RatingRepository
      )
    ),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      ratingRepository_1.RatingRepository,
      Object,
    ]),
  ],
  ProductRatingService
);
exports.ProductRatingService = ProductRatingService;
//# sourceMappingURL=RatingService.js.map
