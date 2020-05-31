import { GameObject } from "./game-object";
import { Drawable } from "./drawable";
import { Updateable } from "./updateable";
export declare class Sprite extends GameObject implements Drawable, Updateable {
    constructor();
    update(delta: number): void;
    draw(): void;
}
