import 'reflect-metadata';
import { IsNotEmpty } from 'class-validator';
export class AddCategory {
  @IsNotEmpty()
  public name: string;

  public image: string;

  public parentInt: number;

  @IsNotEmpty()
  public sortOrder: number;

  public metaTagTitle: string;

  public metaTagDescription: string;

  public metaTagKeyword: string;

  public status: any;
}
