import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service'
import {debounceTime, map, tap} from "rxjs";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {


  trigger = false;
  toDoArr:any[] = [];
  constructor(private toDoServ: ToDoService) {

  }
  // showmMessage(){
  //   console.log('toDoArr ' + this.toDoArr);
  //   console.log('toDoServ ' + this.toDoServ.toDoList)
  // }

  ngOnInit(): void {
    this.toDoServ.toDoList.pipe(
      map(el => {
        if(el != ''){
          this.toDoArr.push(el);
          this.trigger = true;
        }
      }),
    ).subscribe()

    console.log(this.toDoServ.toDoList);
  }
}
