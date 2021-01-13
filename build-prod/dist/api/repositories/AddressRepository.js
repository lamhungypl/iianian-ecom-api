'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.AddressRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const Address_1 = require('../models/Address');
const BaseRepository_1 = require('./base/BaseRepository');
let AddressRepository = class AddressRepository extends BaseRepository_1.BaseRepository {};
AddressRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(Address_1.Address)],
  AddressRepository
);
exports.AddressRepository = AddressRepository;
//# sourceMappingURL=AddressRepository.js.map
