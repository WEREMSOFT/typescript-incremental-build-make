import { GameObject } from "./game-object";
import { Updateable } from "./updateable";
import { Drawable } from "./drawable";

export class World extends GameObject implements Updateable, Drawable {
    constructor() {
        super();
    }

    public update(delta: number): void 
    {
        console.log('children length on update', this.children.length);
        for(let i = 0; i < this.children.length; i++)
        {
            // TODO: Something went wrong here
            if(this.children[i] instanceof Updateable){
                (<Updateable>this.children[i]).update(delta);
            }
        }
    }

    public draw(): void {
        for(let i = 0; i < this.children.length; i++)
        {
            if(this.children[i] instanceof Drawable){
                (<Drawable>this.children[i]).draw();
            }
        }
    }

}