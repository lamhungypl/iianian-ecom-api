'use strict';
/*


 */
Object.defineProperty(exports, '__esModule', { value: true });
const typeorm_seeding_1 = require('typeorm-seeding');
const stockStatus_1 = require('../../api/models/stockStatus');
typeorm_seeding_1.define(stockStatus_1.StockStatus, (faker, settings) => {
  const stockStatus = new stockStatus_1.StockStatus();
  return stockStatus;
});
//# sourceMappingURL=StockStatusFactory.js.map
