import "reflect-metadata";
import { IsNotEmpty, MaxLength } from "class-validator";

export class CreateCurrency {
    @MaxLength(30, {
        message: "title is maximum 30 character"
    })
    @IsNotEmpty()
    public title: string;

    @MaxLength(3, {
        message: "code is maximum 3 character"
    })
    public code: string;

    @MaxLength(30, {
        message: "symbolLeft is maximum 30 character"
    })
    public symbolLeft: string;

    @MaxLength(30, {
        message: "symbolRight is maximum 30 character"
    })
    public symbolRight: string;

    @IsNotEmpty()
    public value: number;

    @IsNotEmpty()
    public status: number;
}
