import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {BehaviorSubject, Subscription} from 'rxjs';
import {ToDoService} from "../to-do.service";
import {map}  from "rxjs/operators"

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.scss']
})
export class LengthComponent implements OnInit {

  url$: BehaviorSubject<any> = new BehaviorSubject<any>('')
  constructor(private toDo: ToDoService){}

  ngOnInit(): void {
    this.toDo.url$.pipe(
      map(el => this.url$.next(el))
      // map(el => console.log(el))
    ).subscribe()
  }

}
