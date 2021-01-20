import 'reflect-metadata';
import { IsNotEmpty } from 'class-validator';

export class UpdateBanner {
  @IsNotEmpty()
  public bannerId: number;

  @IsNotEmpty()
  public title: string;

  public content: string;

  public image: string;

  public link: string;

  public position: number;

  public status: any;
}
