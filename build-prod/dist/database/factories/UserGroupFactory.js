'use strict';
/*


 */
Object.defineProperty(exports, '__esModule', { value: true });
const typeorm_seeding_1 = require('typeorm-seeding');
const UserGroup_1 = require('../../api/models/UserGroup');
typeorm_seeding_1.define(UserGroup_1.UserGroup, (faker, settings) => {
  const usergroup = new UserGroup_1.UserGroup();
  return usergroup;
});
//# sourceMappingURL=UserGroupFactory.js.map
