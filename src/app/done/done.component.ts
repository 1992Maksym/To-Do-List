import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  doneArr = []
  constructor() { }

  ngOnInit(): void {
  }

}
