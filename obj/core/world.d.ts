import { GameObject } from "./game-object";
import { Updateable } from "./updateable";
import { Drawable } from "./drawable";
export declare class World extends GameObject implements Updateable, Drawable {
    constructor();
    update(delta: number): void;
    draw(): void;
}
