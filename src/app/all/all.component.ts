import { Component, OnInit } from '@angular/core';
import {Todo, ToDoService} from "../to-do.service";
import { map } from 'rxjs/operators';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  allArr$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])
  constructor(private toDo: ToDoService) { }

  ngOnInit(): void {
    this.allArr$ = this.toDo.toDoList$;
  }

}
