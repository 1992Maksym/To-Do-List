import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { DoneServService } from '../done-serv.service'
import {debounceTime, map, tap} from "rxjs";
import {AllService} from "../all.service";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  trigger = false;
  toDoArr = [];
  constructor(private toDoServ: ToDoService, private  doneServ: DoneServService, private allServ: AllService) {}

  ngOnInit(): void {
    this.toDoServ.setValues()
    this.toDoServ.toDoList.pipe(
     map(el => {
       this.trigger = true;
       this.toDoArr = el;
     })
    ).subscribe()
  }

  addItem(item: any){
    this.doneServ.getValDone(item);
    this.toDoServ.deleteItem(item);
  }

  deleteItem(item: any){
    this.toDoServ.deleteItem(item);
    this.allServ.deleteItem(item);
  }


}
