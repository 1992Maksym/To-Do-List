import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";
// import {LocalStorageService} from "./local-storage.service";

// export type Status = 'done | undone'

export enum url{
  all = '/all',
  done = '/done',
  todo = '/todo'
}
export interface Todo {
  id: number;
  value: string;
  status: boolean;
}
@Injectable()

export class ToDoService{
  // constructor(private localStor: LocalStorageService) {}
  // toDoList$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>(JSON.parse(localStorage.getItem('arr') || '[]'));
  // todoArr: Todo[] = JSON.parse(localStorage.getItem('arr') || '[]');


  enumUrls = Object.values(url)
  localStor:string = 'localArr';
  url$: BehaviorSubject<any> = new BehaviorSubject<any>('');
  toDoList$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  todoArr: Todo[] = []
  id: number = 0;

  createTask(item: Todo){
    item.id = ++this.id;
    this.todoArr.push(item);
    localStorage.setItem(this.localStor, JSON.stringify(this.todoArr))
    this.toDoList$.next(Object.assign([], this.todoArr))
    // this.localStor.addToLocalStorage(this.todoArr)
  }

  deleteTask(id: number){
    this.todoArr = this.todoArr.filter(el => el.id != id);
    this.toDoList$.next(Object.assign([], this.todoArr));
    localStorage.setItem(this.localStor, JSON.stringify(this.todoArr))
    // this.localStor.addToLocalStorage(this.todoArr)
  }

  readId(){
    const arr = JSON.parse(localStorage.getItem(this.localStor) || '[]')
    if(arr.length > 0)    this.id = arr[arr.length -1].id;
  }

  initializeLocalStorage(){
    this.readId()
    this.toDoList$ = new BehaviorSubject<Todo[]>(JSON.parse(localStorage.getItem(this.localStor) || '[]'));
    this.todoArr = JSON.parse(localStorage.getItem(this.localStor) || '[]');
  }

  getLengthByUrl(url:string){
    if(url == this.enumUrls[0]) this.url$.next(this.todoArr.length)
    else if(url == this.enumUrls[1]) {
      const done = this.todoArr.filter(el => el.status == true).length
      this.url$.next(done);
    }
    else if(url == this.enumUrls[2]) {
      const todo = this.todoArr.filter(el => el.status !== true).length
      this.url$.next(todo);
    }
  }
}

