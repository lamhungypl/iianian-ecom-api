/*


 */

import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Settings } from '../../api/models/setting';
define(Settings, (faker: typeof Faker, settings: { role: string }) => {
  const setiings = new Settings();
  return setiings;
});
