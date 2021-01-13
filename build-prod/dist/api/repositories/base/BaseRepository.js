'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.BaseRepository = void 0;
const tslib_1 = require('tslib');
const typeorm_1 = require('typeorm');
let BaseRepository = class BaseRepository extends typeorm_1.Repository {};
BaseRepository = tslib_1.__decorate(
  [typeorm_1.EntityRepository()],
  BaseRepository
);
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=BaseRepository.js.map
