import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.scss']
})
export class LengthComponent implements OnInit {

  url: string = ''
  constructor(private route:Router) {
    console.log(route.url)
  }

  ngOnInit(): void {
  }

}
