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
  toDoArray:any[] = [];
  constructor(private toDo: ToDoService) {}

  ngOnInit(): void {
    this.toDo.todoArr.forEach(el => {
      if(el.status == false) this.toDoArray.push(el);
    })
  }

}
