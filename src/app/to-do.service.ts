// import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";
import {LocalStorageService} from "./local-storage.service";

// export type Status = 'done | undone'

export interface Todo {
  id: number;
  value: string;
  status: boolean;
}
// @Injectable()

export class ToDoService{
  constructor(private localStor: LocalStorageService) {}

  // toDoList$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>(JSON.parse(localStorage.getItem('arr') || '[]'));
  // todoArr: Todo[] = JSON.parse(localStorage.getItem('arr') || '[]');
  url$: BehaviorSubject<any> = new BehaviorSubject<any>('');
  toDoList$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  todoArr: Todo[] = []
  id: number = 0;

  createTask(item: Todo){
    item.id = ++this.id;
    this.todoArr.push(item);
    localStorage.setItem(this.localStor.localArr, JSON.stringify(this.todoArr))
    this.toDoList$.next(Object.assign([], this.todoArr))
    // this.localStor.addToLocalStorage(this.todoArr)
  }

  deleteTask(id: number){
    this.todoArr = this.todoArr.filter(el => el.id != id);
    this.toDoList$.next(Object.assign([], this.todoArr));
    localStorage.setItem(this.localStor.localArr, JSON.stringify(this.todoArr))
    // this.localStor.addToLocalStorage(this.todoArr)
  }

  readId(){
    const arr = JSON.parse(localStorage.getItem(this.localStor.localArr) || '[]')
    if(arr.length > 0)    this.id = arr[arr.length -1].id;
  }

  initializeLocalStorage(){
    this.readId()
    this.toDoList$ = new BehaviorSubject<Todo[]>(JSON.parse(localStorage.getItem(this.localStor.localArr) || '[]'));
    this.todoArr = JSON.parse(localStorage.getItem(this.localStor.localArr) || '[]');
  }

  getUrl(url:string){
    if(url == '/all') this.url$.next(this.todoArr.length)
    else if(url == '/done') {
      const done = this.todoArr.filter(el => el.status == true).length
      this.url$.next(done);
    }
    else if(url == '/todo') {
      const todo = this.todoArr.filter(el => el.status !== true).length
      this.url$.next(todo);
    }
  }
}

