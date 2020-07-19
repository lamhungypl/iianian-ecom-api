import "reflect-metadata";
import { IsNotEmpty, MaxLength } from "class-validator";
export class CreateLanguage {
    @MaxLength(32, {
        message: "name is maximum 32 character"
    })
    @IsNotEmpty()
    public name: string;

    @MaxLength(5, {
        message: "code is maximum 5 character"
    })
    public code: string;

    public image: string;

    public sortOrder: number;

    @IsNotEmpty()
    public status: number;
}
