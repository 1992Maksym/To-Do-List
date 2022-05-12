import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {debounceTime, map, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor() { }

  toDoList: BehaviorSubject<any> = new BehaviorSubject<any>('');

  toDoValues:any = []

  getValue(val: any){
    this.toDoValues.push(val);
  }

  setValues(){
    this.toDoList.next(this.toDoValues)
  }

  deleteItem(item: any){
    this.toDoValues.find((el: any) => {
      if(el == item){
        let index = this.toDoValues.indexOf(el);
        this.toDoValues.splice(index,1);
      }
    });
  }

}

