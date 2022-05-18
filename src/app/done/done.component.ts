import { Component, OnInit } from '@angular/core';
import {Todo, ToDoService} from '../to-do.service';
import {BehaviorSubject, debounceTime, map, tap} from "rxjs";

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  length: number = 0;
  doneArr$:BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])
  // doneArr: Todo[] = []
  constructor(private toDo: ToDoService) {}

  ngOnInit(): void {
    // this.toDo.todoArr.forEach(el => {
    //   if(el.status == true) this.doneArr.push(el)
    // })
    const arr = this.toDo.toDoList$.getValue().filter(el => el.status == true);
    this.doneArr$.next(arr)
    this.length = this.doneArr$.getValue().length;

  }
}
