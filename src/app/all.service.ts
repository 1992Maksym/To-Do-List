import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AllService {

  allServiceList: BehaviorSubject<any> = new BehaviorSubject<any>('')

  constructor() { }

  allArr: any = [];

  getAllValues(el: any){
    this.allArr.push(el);
  }

  setAllValues(){
    this.allServiceList.next(this.allArr);
  }
}
