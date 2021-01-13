'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CreateBanner = void 0;
const tslib_1 = require('tslib');
require('reflect-metadata');
const class_validator_1 = require('class-validator');
class CreateBanner {}
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', String)],
  CreateBanner.prototype,
  'title',
  void 0
);
exports.CreateBanner = CreateBanner;
//# sourceMappingURL=createBannerRequest.js.map
