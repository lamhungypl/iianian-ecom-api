'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UpdateBanner = void 0;
const tslib_1 = require('tslib');
require('reflect-metadata');
const class_validator_1 = require('class-validator');
class UpdateBanner {}
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', Number)],
  UpdateBanner.prototype,
  'bannerId',
  void 0
);
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', String)],
  UpdateBanner.prototype,
  'title',
  void 0
);
exports.UpdateBanner = UpdateBanner;
//# sourceMappingURL=updateBannerRequest.js.map
