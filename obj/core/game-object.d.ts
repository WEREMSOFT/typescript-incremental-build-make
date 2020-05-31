import { Vector3 } from "./vector-3";
import { Updateable } from "./updateable";
import { Drawable } from "./drawable";
export declare class GameObject {
    position: Vector3;
    children: (GameObject | Updateable | Drawable)[];
    constructor();
    addChild(go: GameObject | Drawable | Updateable): void;
}
