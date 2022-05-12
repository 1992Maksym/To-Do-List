import { Component, OnInit } from '@angular/core';
import { ToDoService } from "../to-do.service";
import {AllService} from "../all.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  inputVal: any;
  constructor(private toDo: ToDoService, private all: AllService) { }

  getInputVal(el: any){
    this.inputVal = el;
  }
  ngOnInit(): void {}

  takeSearchVal(){
    if(this.inputVal != ''){
      this.toDo.getValue(this.inputVal);
      this.all.getAllValues(this.inputVal);
    }
  }

}
