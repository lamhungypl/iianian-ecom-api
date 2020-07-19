import "reflect-metadata";
import { IsNotEmpty } from "class-validator";

export class CreateOption {
    @IsNotEmpty()
    public name: string;

    public type: string;

    @IsNotEmpty()
    public sortOrder: number;

    public optionValue: any;
}
