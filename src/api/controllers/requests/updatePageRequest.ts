import 'reflect-metadata';
import { IsNotEmpty } from 'class-validator';

export class UpdatePage {
  @IsNotEmpty()
  public pageId: number;

  @IsNotEmpty({
    message: 'title is required',
  })
  public title: string;

  @IsNotEmpty({
    message: 'content is required',
  })
  public content: string;

  @IsNotEmpty()
  public active: number;

  public metaTagTitle: string;

  public metaTagContent: string;

  public metaTagKeyword: string;
}
