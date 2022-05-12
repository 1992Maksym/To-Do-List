import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {debounceTime, map, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor() { }

  toDoList: BehaviorSubject<any> = new BehaviorSubject<any>('');

  getValue(val: any){
    this.toDoValues.push(val);
  }

  toDoValues:any = []

  setValues(){
    this.toDoList.next(this.toDoValues)
  }


}

