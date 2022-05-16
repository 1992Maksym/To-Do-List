import { Component, OnInit } from '@angular/core';
import {Todo, ToDoService} from "../to-do.service";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {BehaviorSubject} from "rxjs";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  todoData$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  todoForm: FormGroup;

  constructor(private toDoService: ToDoService, private formBuilder: FormBuilder) {
    this.todoForm = this.formBuilder.group({
      id: [""],
      value: ["", Validators.required],
      status: ["undone"]
    })
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.toDoService.createTask(this.todoForm.value);
    // this.todoForm.controls['value'].setValue('');
    console.log(this.todoForm.value);
  }

}
