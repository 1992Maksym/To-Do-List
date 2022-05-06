import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { AllComponent } from '../all/all.component';
import { DoneComponent } from '../done/done.component';
import { ToDoComponent } from '../to-do/to-do.component';


const appRoutes: Routes = [
  { path: 'todo', component: ToDoComponent },
  { path: 'done', component: DoneComponent },
  { path: 'all', component: AllComponent }
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:  [RouterModule]
})
export class RoutingModule { }
