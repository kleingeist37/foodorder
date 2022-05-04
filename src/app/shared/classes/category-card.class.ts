import { Params } from "@angular/router";
import { NavElement } from "./nav-element.class";

export class CategoryCard extends NavElement {
    url: string;
    content: string;

    constructor(title: string, route: string, content: string, url?: string, params?: Params){
        super(title, route, params);
        this.content = content;
        this.url = url;
    }
}