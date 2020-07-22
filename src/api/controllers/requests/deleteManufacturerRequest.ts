import 'reflect-metadata';
import { IsNotEmpty } from 'class-validator';
export class DeleteManufacturer {
  @IsNotEmpty()
  public manufacturerId: number;
}
