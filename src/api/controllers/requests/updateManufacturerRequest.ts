/*

 *

 */

import 'reflect-metadata';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class UpdateManufacturer {
  @IsNotEmpty()
  public manufacturerId: number;

  @MaxLength(30, {
    message: 'Name is maximum 30 character',
  })
  @IsNotEmpty()
  public name: string;

  public image: string;

  @IsNotEmpty()
  public sortOrder: number;

  @IsNotEmpty()
  public status: number;
}
