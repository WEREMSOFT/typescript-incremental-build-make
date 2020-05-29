import { Vector3 } from "./vector-3";
export declare class GameObject {
    position: Vector3;
    children: GameObject[];
    constructor();
    addChild(go: GameObject): void;
}
