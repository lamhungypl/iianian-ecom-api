'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ContactService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const ContactRepository_1 = require('../repositories/ContactRepository');
const BaseService_1 = require('./base/BaseService');
let ContactService = class ContactService extends BaseService_1.BaseService {
  constructor(contactRepository, log) {
    super(contactRepository);
    this.log = log;
  }
};
ContactService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(
      0,
      typeorm_typedi_extensions_1.InjectRepository(
        ContactRepository_1.ContactRepository
      )
    ),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      ContactRepository_1.ContactRepository,
      Object,
    ]),
  ],
  ContactService
);
exports.ContactService = ContactService;
//# sourceMappingURL=ContactService.js.map
