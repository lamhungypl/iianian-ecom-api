'use strict';
/*


 */
Object.defineProperty(exports, '__esModule', { value: true });
const typeorm_seeding_1 = require('typeorm-seeding');
const User_1 = require('../../api/models/User');
typeorm_seeding_1.define(User_1.User, (faker, settings) => {
  const user = new User_1.User();
  return user;
});
//# sourceMappingURL=UserFactory.js.map
