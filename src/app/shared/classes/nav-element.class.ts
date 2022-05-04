import { Params } from "@angular/router";
import { Base } from "./base.class";

export class NavElement extends Base{
    route: string;
    params: Params;

    constructor(displayName: string, route: string, queryParams?: Params){
        super();
        this.displayname = displayName;
        this.route = route;
        this.params = queryParams;
    }
}