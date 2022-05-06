import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import {debounceTime, map, tap} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  inputVal: any;
  searchForm: any;
  constructor() { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      text: new FormControl(null),
    })
    this.searchForm.get('text').valueChanges.pipe(
      debounceTime(700),
      map(el => this.inputVal = el),
      // tap(el => console.log(el))
    ).subscribe()

  }
  takeSearchVal(){
    console.log(this.inputVal)
  }

}
