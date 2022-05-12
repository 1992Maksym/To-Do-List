import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DoneServService {

  constructor() { }

  doneList: BehaviorSubject<any> = new BehaviorSubject<any>('');

  doneArr:any = [];

  getValDone(value: any){
    this.doneArr.push(value);
  }

  setValDone(){
    this.doneList.next(this.doneArr)
  }

  deleteItem(item: any){
    this.doneArr.find((el: any) => {
      if(el == item){
        let index = this.doneArr.indexOf(el);
        this.doneArr.splice(index,1);
      }
    })
  }
}
