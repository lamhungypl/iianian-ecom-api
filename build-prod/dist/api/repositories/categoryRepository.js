'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CategoryRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const categoryModel_1 = require('../models/categoryModel');
const BaseRepository_1 = require('./base/BaseRepository');
let CategoryRepository = class CategoryRepository extends BaseRepository_1.BaseRepository {};
CategoryRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(categoryModel_1.Category)],
  CategoryRepository
);
exports.CategoryRepository = CategoryRepository;
//# sourceMappingURL=categoryRepository.js.map
