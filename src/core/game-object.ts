import { Vector3 } from "./vector-3";
import { Updateable } from "./updateable";
import { Drawable } from "./drawable";

export class GameObject {
    public position: Vector3;
    public children: (GameObject | Updateable | Drawable)[];
    constructor() {
        console.log('Creating game object');
        this.position = new Vector3();
        this.children = [];
    }

    public addChild(go: GameObject | Drawable | Updateable) {
        this.children.push(go);
    }
}