/*

 *

 */

import 'reflect-metadata';
import { IsNotEmpty } from 'class-validator';

export class UpdateOption {
  @IsNotEmpty()
  public optionId: number;

  @IsNotEmpty()
  public name: string;

  public type: string;

  @IsNotEmpty()
  public sortOrder: number;

  public optionValue: [];

  public flag: number;
}
