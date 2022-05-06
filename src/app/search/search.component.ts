import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import {debounceTime, map, tap} from "rxjs";
import { ToDoService } from "../to-do.service"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  inputVal: any;
  searchForm: any;
  constructor(private toDo: ToDoService) { }

  ngOnInit(): void {
    // this.searchForm = new FormGroup({
    //   text: new FormControl(null),
    // })
    // this.searchForm.get('text').valueChanges.pipe(
    //   debounceTime(700),
    //   map(el => this.inputVal = el),
    // ).subscribe()

  }

  getInputVal(el: any){
    this.inputVal = el;
  }

  takeSearchVal(){
    this.toDo.toDoList.push(this.inputVal)
  }

}
