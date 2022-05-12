import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormField } from './form-field.class';
import { OrderMenuService } from './order-menu.service';
import { ValidatorType } from './validatorType.enum';

@Component({
  selector: 'app-order-menu',
  templateUrl: './order-menu.component.html',
  styleUrls: ['./order-menu.component.scss']
})
export class OrderMenuComponent implements OnInit {

  foordOrderForm: FormGroup;
  foordOrderForm2: FormGroup;

  formFields: FormField[] = [
    new FormField('Vorname', 'fdorder-firstName', 'Max', [ValidatorType.required], 'fill', 'form-item'),
    new FormField('Nachname', 'fdorder-lastName', 'Mustermann', [ValidatorType.required], 'fill', 'form-item'),
    new FormField('Straße und Hausnummer', 'fdorder-street', 'Haupstraße 37', [ValidatorType.required], 'fill', 'form-item'),
    new FormField('PLZ', 'fdorder-postalcode', '123456', [ValidatorType.required, ValidatorType.postalcodeDE], 'fill', 'form-item'),
    new FormField('Stadt', 'fdorder-city', 'Musterstadt', [ValidatorType.required], 'fill', 'form-item'),
    new FormField('Telefonnummer', 'fdorder-phone', '0681 123456', [ValidatorType.required, ValidatorType.phone], 'fill', 'form-item'),
    new FormField('Email', 'fdorder-email', 'max@mustermann.de', [ValidatorType.required, ValidatorType.email], 'fill', 'form-item'),
  ];



  ngOnInit(): void {   

    this.foordOrderForm = new FormGroup({});
    for (const formObject of this.formFields) {     
      var control: FormControl = new FormControl(null);
      
      if(formObject.validators.length > 0){
        for(let type of formObject.validators){
          switch(type){
            case ValidatorType.required:
              control.addValidators(Validators.required);
              break;

            case ValidatorType.email:
              control.addValidators(Validators.email);
              break;     
            
            case ValidatorType.phone:
              control.addValidators(Validators.pattern(/^[\+]?[(]?[0-9]{0,2}[)]?[-\s\.]?([0-9]{0,10}[-\s\.]?){0,10}?$/));
              break;
            
            case ValidatorType.postalcodeDE:
              control.addValidators(Validators.pattern(/^[0-9]{5}$/));
              break;
          }
          control.updateValueAndValidity();     
        }    
      }        
      this.foordOrderForm.addControl(formObject.controlName, control); // instead of this.obj[key] 
    }
  }


}
