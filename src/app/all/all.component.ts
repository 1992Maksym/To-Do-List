import { Component, OnInit } from '@angular/core';
import {AllService} from "../all.service";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  allArr = []
  constructor(private allService: AllService) { }

  ngOnInit(): void {
    this.allService.setAllValues();
    this.allService.allServiceList.pipe(
      map(el => {
        this.allArr = el;
      })
    ).subscribe();
  }



}
