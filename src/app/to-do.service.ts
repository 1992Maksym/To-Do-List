import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

// @Injectable()
export type Status = 'done | undone'

export interface Todo {
  id: any;
  value: string;
  status: Status;
}

export class ToDoService {

  constructor() {}

  toDoList$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  todoArr: Todo[] = [];
  id: number = 0;

  createTask(item: Todo){
    item.id = ++this.id;
    this.todoArr.push(item);
    this.toDoList$.next(Object.assign([], this.todoArr))
  }


}

