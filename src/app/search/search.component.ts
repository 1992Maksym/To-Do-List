import { Component, OnInit } from '@angular/core';
import { ToDoService } from "../to-do.service"
// import { ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";
// import { FormsModule } from "@angular/forms";
import {debounceTime, map, tap} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  inputVal: any;
  constructor(private toDo: ToDoService) { }

  getInputVal(el: any){
    this.inputVal = el;
  }
  ngOnInit(): void {}

  takeSearchVal(){
    this.toDo.toDoList.next(this.inputVal)
    this.toDo.toDoList.pipe(
      map(el => el),
    ).subscribe();
  }

}
