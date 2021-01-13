'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CategoryPathRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const CategoryPath_1 = require('../models/CategoryPath');
const BaseRepository_1 = require('./base/BaseRepository');
let CategoryPathRepository = class CategoryPathRepository extends BaseRepository_1.BaseRepository {};
CategoryPathRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(CategoryPath_1.CategoryPath)],
  CategoryPathRepository
);
exports.CategoryPathRepository = CategoryPathRepository;
//# sourceMappingURL=CategoryPathRepository.js.map
