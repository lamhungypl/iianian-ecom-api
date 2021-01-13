'use strict';
/*


 */
Object.defineProperty(exports, '__esModule', { value: true });
const typeorm_seeding_1 = require('typeorm-seeding');
const setting_1 = require('../../api/models/setting');
typeorm_seeding_1.define(setting_1.Settings, (faker, settings) => {
  const setiings = new setting_1.Settings();
  return setiings;
});
//# sourceMappingURL=SettingFactory.js.map
