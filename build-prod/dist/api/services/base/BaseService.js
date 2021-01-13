'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.BaseService = void 0;
const tslib_1 = require('tslib');
class BaseService {
  constructor(repository) {
    this.repository = repository;
  }
  create(newModel) {
    return this.repository.save(newModel);
  }
  update(id, newModel) {
    newModel[newModel.getIdField()] = id;
    return this.repository.save(newModel);
  }
  findOne(options) {
    return this.repository.findOne(options);
  }
  findOneById(id, options) {
    return this.repository.findOne(id, options);
  }
  delete(criteria) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      try {
        yield this.repository.delete(criteria);
        return 1;
      } catch (error) {
        return -1;
      }
    });
  }
  list(options) {
    console.log(JSON.stringify(options));
    return this.repository.find(options);
  }
  count(options) {
    return this.repository.count(options);
  }
  findAndCount(options) {
    return this.repository.findAndCount(options);
  }
}
exports.BaseService = BaseService;
//# sourceMappingURL=BaseService.js.map
