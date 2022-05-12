import { Validators } from "@angular/forms";
import { ValidatorType } from "./ValidatorType.enum";

export class FormField {
    label: string;
    controlName: string;
    placeholder: string;
    validators: ValidatorType[];
    appeareance: string;
    classes: string;

    constructor(label: string, controlname: string, placeholder?: string, validators?: ValidatorType[], appeareance?: string, classes?: string){
        this.label = label;
        this.controlName = controlname;
        this.placeholder = placeholder.length > 0 ? placeholder : label;
        this.validators = validators;
        this.appeareance = appeareance.length > 0 ? appeareance : 'fill';
        this.classes = classes;
        
    }
}