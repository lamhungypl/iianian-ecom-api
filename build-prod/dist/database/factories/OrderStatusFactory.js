'use strict';
/*


 */
Object.defineProperty(exports, '__esModule', { value: true });
const typeorm_seeding_1 = require('typeorm-seeding');
const orderStatus_1 = require('../../api/models/orderStatus');
typeorm_seeding_1.define(orderStatus_1.OrderStatus, (faker, settings) => {
  const orderStatus = new orderStatus_1.OrderStatus();
  return orderStatus;
});
//# sourceMappingURL=OrderStatusFactory.js.map
