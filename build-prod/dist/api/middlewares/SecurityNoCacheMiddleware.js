'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.SecurityNoCacheMiddleware = void 0;
const tslib_1 = require('tslib');
const nocache_1 = tslib_1.__importDefault(require('nocache'));
const routing_controllers_1 = require('routing-controllers');
let SecurityNoCacheMiddleware = class SecurityNoCacheMiddleware {
  use(req, res, next) {
    return nocache_1.default()(req, res, next);
  }
};
SecurityNoCacheMiddleware = tslib_1.__decorate(
  [routing_controllers_1.Middleware({ type: 'before' })],
  SecurityNoCacheMiddleware
);
exports.SecurityNoCacheMiddleware = SecurityNoCacheMiddleware;
//# sourceMappingURL=SecurityNoCacheMiddleware.js.map
