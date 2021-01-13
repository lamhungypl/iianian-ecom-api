'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.PageRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const page_1 = require('../models/page');
const BaseRepository_1 = require('./base/BaseRepository');
let PageRepository = class PageRepository extends BaseRepository_1.BaseRepository {};
PageRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(page_1.Page)],
  PageRepository
);
exports.PageRepository = PageRepository;
//# sourceMappingURL=pageRepository.js.map
