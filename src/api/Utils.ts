import 'reflect-metadata';

import { Dictionary, pickBy } from 'lodash';
import { FindConditions } from 'typeorm';
import { Product } from './models/ProductModel';

export const NotNullObject = <T extends object>(
  object: T | null | undefined
) => {
  return pickBy<T>(object, value => value != null);
};
const a = pickBy<FindConditions<Product>>({ name: '' }, value => value != null);
const b = NotNullObject<FindConditions<Product>>({ name: '' });
