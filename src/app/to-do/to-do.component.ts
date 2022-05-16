import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import {debounceTime, map, tap} from "rxjs";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  toDoArr = [];
  constructor() {}

  ngOnInit(): void {}

}
