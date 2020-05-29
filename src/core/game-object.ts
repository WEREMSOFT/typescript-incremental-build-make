import { Vector3 } from "./vector-3";

export class GameObject {
    public position: Vector3;
    public children: GameObject[];
    constructor() {
        console.log('Creating game object');
        this.position = new Vector3();
        this.children = [];
    }

    public addChild(go: GameObject) {
        this.children.push(go);
    }
}