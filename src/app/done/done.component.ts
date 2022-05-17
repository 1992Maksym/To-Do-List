import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import {debounceTime, map, tap} from "rxjs";

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  doneArr:any[] = []
  constructor(private toDo: ToDoService) { }

  ngOnInit(): void {
    this.toDo.todoArr.forEach(el => {
      if(el.status == true) this.doneArr.push(el)
    })
  }
}
