import "reflect-metadata";
import { IsNotEmpty, MaxLength } from "class-validator";
export class CreateManufacturer {
    @MaxLength(30, {
        message: "Name is maximum 30 character"
    })
    @IsNotEmpty()
    public name: string;

    @IsNotEmpty()
    public image: string;

    @IsNotEmpty()
    public sortOrder: number;

    @IsNotEmpty()
    public status: number;
}
