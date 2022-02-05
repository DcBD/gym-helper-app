import { Application } from "express";

export default abstract class CommonRoute {
    readonly app: Application;
    readonly name: string;

    constructor(app: Application, name: string) {
        this.app = app;
        this.name = name;
    }

    public getName() {
        return this.name;
    }

    public get base(){
        return `/${this.getName()}`
    }

    public subRoute(subRoute : string) {
        return `${this.base}/${subRoute}`;
    }


    public route(name : string) {
        return this.app.route(this.subRoute(name))
    }
}