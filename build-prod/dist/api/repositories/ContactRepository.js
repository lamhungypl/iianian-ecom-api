'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ContactRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const Contact_1 = require('../models/Contact');
const BaseRepository_1 = require('./base/BaseRepository');
let ContactRepository = class ContactRepository extends BaseRepository_1.BaseRepository {};
ContactRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(Contact_1.Contact)],
  ContactRepository
);
exports.ContactRepository = ContactRepository;
//# sourceMappingURL=ContactRepository.js.map
