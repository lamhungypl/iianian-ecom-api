/*

 *

 */

import 'reflect-metadata';
import { IsNotEmpty } from 'class-validator';
export class UpdateCategoryRequest {
  @IsNotEmpty()
  public categoryId: number;

  @IsNotEmpty()
  public name: string;

  public image: string;

  public parentInt: number;

  @IsNotEmpty()
  public sortOrder: number;

  public metaTagTitle: string;

  public metaTagDescription: string;

  public metaTagKeyword: string;
}
