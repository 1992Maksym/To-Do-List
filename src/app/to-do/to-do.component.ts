import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service'

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  toDoArr:any[] = [];
  constructor(private toDoServ: ToDoService) { }

  ngOnInit(): void {
    this.toDoServ.toDoList.forEach((el) => {
      this.toDoArr.push(el)
    })
  }

}
