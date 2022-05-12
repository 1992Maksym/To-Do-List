import { Component, OnInit } from '@angular/core';
import { DoneServService } from '../done-serv.service';
import {debounceTime, map, tap} from "rxjs";
import {AllService} from "../all.service";

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  doneArr = []
  constructor(private done: DoneServService, private allServ: AllService) { }

  ngOnInit(): void {
    this.done.setValDone();
    this.done.doneList.pipe(
      map(el => {
        this.doneArr = el;
      })
    ).subscribe()
  }
  deleteDoneItem(item: any){
    this.done.deleteItem(item);
    this.allServ.deleteItem(item);
  }


}
