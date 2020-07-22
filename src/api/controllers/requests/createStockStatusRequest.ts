import 'reflect-metadata';
import { IsNotEmpty } from 'class-validator';

export class CreateStockStatus {
  @IsNotEmpty({
    message: 'name is required',
  })
  public name: string;

  @IsNotEmpty({
    message: 'status is required',
  })
  public status: number;
}
