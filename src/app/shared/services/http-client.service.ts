import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FoodItem } from '../classes/food-item.class';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService implements OnInit {
  baseURL: string = "https://food-order-37977-default-rtdb.europe-west1.firebasedatabase.app/";
  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(): void {
    
  }

  pushData(data: any, urlPath: string){
    this.httpClient.put(this.baseURL + urlPath + ".json", data).subscribe(response => console.log(response));
  }

  getData(urlPath: string){
    return this.httpClient
        .get(this.baseURL + urlPath + ".json")


  }
}
