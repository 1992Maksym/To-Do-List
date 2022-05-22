import { Component, OnInit } from '@angular/core';
import {Todo, ToDoService} from "../to-do.service";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import { map } from "rxjs/operators";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  todoData$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  todoForm: FormGroup;

  constructor(private toDoService: ToDoService, private formBuilder: FormBuilder, private router: Router) {
    this.todoForm = this.formBuilder.group({
      id: [""],
      value: ["", Validators.required],
      status: false,
    })
  }

  ngOnInit(): void {
    this.todoData$ = this.toDoService.toDoList$
  }

  onSubmit(){
    this.toDoService.createTask(this.todoForm.value);
    this.todoForm.controls['value'].setValue('');
    this.toDoService.getUrl(this.router.url)
  }

}
