import { Injectable } from '@angular/core';
import {Todo, ToDoService} from "./to-do.service";

@Injectable()
export class LocalStorageService {

  localArr:string = 'localArr';
  constructor(private todo: ToDoService) {}
  addToLocalStorage(arr: Todo[]){
    localStorage.setItem(this.localArr, JSON.stringify(arr))
  }

}
