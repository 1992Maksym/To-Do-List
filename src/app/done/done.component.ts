import { Component, OnInit } from '@angular/core';
import { DoneServService } from '../done-serv.service';
import {debounceTime, map, tap} from "rxjs";

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  doneArr = []
  constructor(private done: DoneServService) { }

  ngOnInit(): void {
    this.done.setValDone();
    this.done.doneList.pipe(
      map(el => {
        this.doneArr = el;
      })
    ).subscribe()
  }
  deleteDoneItem(item: any){
    this.done.doneArr.find((el: any) => {
      if(el == item){
        let index = this.done.doneArr.indexOf(el);
        this.done.doneArr.splice(index,1);
      }
    })
  }


}
