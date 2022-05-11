import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service'
import {debounceTime, map, tap} from "rxjs";
import {trigger} from "@angular/animations";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  trigger = false;
  toDoArr = [];
  constructor(private toDoServ: ToDoService) {}

  ngOnInit(): void {
    this.toDoServ.setValues()
    this.toDoServ.toDoList.pipe(
     map(el => {
       this.trigger = true;
       this.toDoArr = el;
       // this.toDoArr.push(el)
     })
    ).subscribe()
  }

}
