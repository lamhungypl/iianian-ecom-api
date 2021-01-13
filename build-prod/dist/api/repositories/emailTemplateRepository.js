'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.EmailTemplateRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const emailTemplate_1 = require('../models/emailTemplate');
const BaseRepository_1 = require('./base/BaseRepository');
let EmailTemplateRepository = class EmailTemplateRepository extends BaseRepository_1.BaseRepository {};
EmailTemplateRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(emailTemplate_1.EmailTemplate)],
  EmailTemplateRepository
);
exports.EmailTemplateRepository = EmailTemplateRepository;
//# sourceMappingURL=emailTemplateRepository.js.map
