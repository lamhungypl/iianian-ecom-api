import 'reflect-metadata';
import { IsNotEmpty } from 'class-validator';
export class DeleteOption {
  @IsNotEmpty()
  public optionId: number;
}
