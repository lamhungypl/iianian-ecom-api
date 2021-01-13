'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CustomerRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
const Customer_1 = require('../models/Customer');
let CustomerRepository = class CustomerRepository extends typeorm_1.Repository {};
CustomerRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository(Customer_1.Customer)],
  CustomerRepository
);
exports.CustomerRepository = CustomerRepository;
//# sourceMappingURL=CustomerRepository.js.map
