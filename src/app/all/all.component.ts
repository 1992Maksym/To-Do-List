import { Component, OnInit } from '@angular/core';
import {ToDoService} from "../to-do.service";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  allArr = []
  constructor(private toDo: ToDoService) { }

  ngOnInit(): void {}

}
