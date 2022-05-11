import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { DoneServService } from '../done-serv.service'
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
  constructor(private toDoServ: ToDoService, private  doneServ: DoneServService) {}

  ngOnInit(): void {
    this.toDoServ.setValues()
    this.toDoServ.toDoList.pipe(
     map(el => {
       this.trigger = true;
       this.toDoArr = el;
     })
    ).subscribe()
  }

  addItem(){
    let toDoItemText: any = document.querySelector('.toDoItemText');
    this.doneServ.getValDone(toDoItemText.innerHTML);
    this.toDoServ.toDoValues.find((el: any) => {
      if(el == toDoItemText.innerHTML){
        let index = this.toDoServ.toDoValues.indexOf(el);
        this.toDoServ.toDoValues.splice(index,1);
      }
    })
  }


  deleteItem(){

  }
}
