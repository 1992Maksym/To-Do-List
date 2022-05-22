import { Component, OnInit } from '@angular/core';
import {Todo, ToDoService} from "../to-do.service";
import { map } from 'rxjs/operators';
import {BehaviorSubject} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  allArr$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])
  constructor(private toDo: ToDoService, private router: Router) { }

  ngOnInit(): void {
    this.toDo.getUrl(this.router.url)



    this.allArr$ = this.toDo.toDoList$;
    this.allArr$.pipe(
      map(arr => {
        arr.forEach(obj => {
          if(obj.status == true) {

          }
        })
      })
    )
  }
  deleteTask(id: number){
    this.toDo.deleteTask(id);
  }

  onChangeStatus($event: any, item: Todo){
    item.status = $event.target.checked;
  }

}
