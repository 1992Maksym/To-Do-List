import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";

// @Injectable()
// export type Status = 'done | undone'

export interface Todo {
  id: number;
  value: string;
  status: boolean;
}

export class ToDoService{

  constructor() {}

  toDoList$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>(JSON.parse(localStorage.getItem('arr') || '[]'));
  todoArr: Todo[] = JSON.parse(localStorage.getItem('arr') || '[]');
  // todoArr: Todo[] = []
  id: number = 0;

  createTask(item: Todo){
    item.id = ++this.id;
    this.todoArr.push(item);
    localStorage.setItem('arr', JSON.stringify(this.todoArr))
    this.toDoList$.next(Object.assign([], this.todoArr))
  }

  deleteTask(id: number){
    this.todoArr = this.todoArr.filter(el => el.id != id);
    this.toDoList$.next(Object.assign([], this.todoArr));
  }



}

