'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.AddressService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const AddressRepository_1 = require('../repositories/AddressRepository');
const BaseService_1 = require('./base/BaseService');
let AddressService = class AddressService extends BaseService_1.BaseService {
  constructor(repository, log) {
    super(repository);
    this.log = log;
  }
};
AddressService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(
      0,
      typeorm_typedi_extensions_1.InjectRepository(
        AddressRepository_1.AddressRepository
      )
    ),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [
      AddressRepository_1.AddressRepository,
      Object,
    ]),
  ],
  AddressService
);
exports.AddressService = AddressService;
//# sourceMappingURL=AddressService.js.map
