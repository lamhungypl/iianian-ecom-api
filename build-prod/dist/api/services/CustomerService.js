'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CustomerService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const typeorm_typedi_extensions_1 = require('typeorm-typedi-extensions');
const Logger_1 = require('../../decorators/Logger');
const CustomerRepository_1 = require('../repositories/CustomerRepository');
const BaseService_1 = require('./base/BaseService');
const Customer_1 = require('../models/Customer');
let CustomerService = class CustomerService extends BaseService_1.BaseService {
  constructor(log, repository) {
    super(repository);
    this.log = log;
  }
  todayCustomerCount(todayDate) {
    const query = this.repository.manager.createQueryBuilder(
      Customer_1.Customer,
      'customer'
    );
    query.select(['COUNT(customer.id) as customerCount']);
    query.where('DATE(customer.createdDate) = :todayDate', { todayDate });
    //console.log({ TodayCustomerCount: query.getQuery() });
    return query.getRawOne();
  }
};
CustomerService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(0, Logger_1.Logger(__filename)),
    tslib_1.__param(
      1,
      typeorm_typedi_extensions_1.InjectRepository(
        CustomerRepository_1.CustomerRepository
      )
    ),
    tslib_1.__metadata('design:paramtypes', [
      Object,
      CustomerRepository_1.CustomerRepository,
    ]),
  ],
  CustomerService
);
exports.CustomerService = CustomerService;
//# sourceMappingURL=CustomerService.js.map
