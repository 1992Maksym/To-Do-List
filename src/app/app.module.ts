import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { RoutingModule } from "./routing/routing.module"

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AllComponent } from './all/all.component';
import { DoneComponent } from './done/done.component';
import { ToDoComponent } from './to-do/to-do.component';
import {ToDoService} from "./to-do.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AllComponent,
    DoneComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RoutingModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
