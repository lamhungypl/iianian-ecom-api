'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.FileNameRequest = void 0;
const tslib_1 = require('tslib');
require('reflect-metadata');
const class_validator_1 = require('class-validator');
class FileNameRequest {}
tslib_1.__decorate(
  [class_validator_1.IsNotEmpty(), tslib_1.__metadata('design:type', String)],
  FileNameRequest.prototype,
  'image',
  void 0
);
exports.FileNameRequest = FileNameRequest;
//# sourceMappingURL=createFileNameRequest.js.map
