import { GameObject } from "./game-object";
import { Drawable } from "./drawable";
import { Updateable } from "./updateable";

export class Sprite extends GameObject implements Drawable, Updateable {
    constructor() {
        super();
    }

    public update(delta: number): void {
        console.log('updateando sprite');
    }

    public draw(): void {
        console.log('drawing sprite');
    }

    
}