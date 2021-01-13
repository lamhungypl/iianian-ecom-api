'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.EmailTemplateService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const emailTemplateRepository_1 = require('../repositories/emailTemplateRepository');
const BaseService_1 = require('./base/BaseService');
let EmailTemplateService = class EmailTemplateService extends BaseService_1.BaseService {
  constructor(repository, log) {
    super(repository);
    this.log = log;
  }
};
EmailTemplateService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(
      0,
      typeorm_typedi_extensions_1.InjectRepository(
        emailTemplateRepository_1.EmailTemplateRepository
      )
    ),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      emailTemplateRepository_1.EmailTemplateRepository,
      Object,
    ]),
  ],
  EmailTemplateService
);
exports.EmailTemplateService = EmailTemplateService;
//# sourceMappingURL=emailTemplateService.js.map
