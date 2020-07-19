import "reflect-metadata";
import { IsNotEmpty } from "class-validator";

export class CreateBanner {
    @IsNotEmpty()
    public title: string;

    public content: string;

    public image: string;

    public link: string;

    public position: number;
}
