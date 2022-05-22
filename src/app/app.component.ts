import {Component, OnInit} from '@angular/core';
import {ToDoService} from "./to-do.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {switchMap, map} from "rxjs/operators"
import {BehaviorSubject, lastValueFrom} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private todo: ToDoService, private router: Router) {}
  ngOnInit() {
    this.todo.initializeLocalStorage()
  }
}

