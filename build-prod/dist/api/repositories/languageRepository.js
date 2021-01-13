'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.LanguageRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const language_1 = require('../models/language');
const BaseRepository_1 = require('./base/BaseRepository');
let LanguageRepository = class LanguageRepository extends BaseRepository_1.BaseRepository {};
LanguageRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(language_1.Language)],
  LanguageRepository
);
exports.LanguageRepository = LanguageRepository;
//# sourceMappingURL=languageRepository.js.map
