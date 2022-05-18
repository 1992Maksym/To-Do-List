import { Component, OnInit } from '@angular/core';
import {Todo, ToDoService} from '../to-do.service';
import {BehaviorSubject, debounceTime, map, tap} from "rxjs";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  length: number = 0;
  // toDoArray:any[] = [];
  toDoArray$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])
  constructor(private toDo: ToDoService) {}

  ngOnInit(): void {
    // this.toDo.todoArr.forEach(el => {
    //   if(el.status == false) this.toDoArray.push(el);
    // })
    const toDo = this.toDo.toDoList$.getValue().filter(el => el.status !== true)
    this.toDoArray$.next(toDo);
  }

}
