import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor() { }

  toDoList: BehaviorSubject<string> = new BehaviorSubject<string>('');
}
