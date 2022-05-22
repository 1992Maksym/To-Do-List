import { Component, OnInit } from '@angular/core';
import {Todo, ToDoService} from '../to-do.service';
import {BehaviorSubject, debounceTime, map, tap} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";


@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  doneArr$:BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])
  // doneArr: Todo[] = []
  constructor(private toDo: ToDoService, private router: Router) {}

  ngOnInit(): void {
    this.toDo.getUrl(this.router.url)
    const arr = this.toDo.toDoList$.getValue().filter(el => el.status == true);
    this.doneArr$.next(arr)
  }
}
