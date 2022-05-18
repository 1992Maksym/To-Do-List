import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.scss']
})
export class LengthComponent implements OnInit {

  url: string = ''
  constructor(private router: Router){
    // console.log(router.url);
  }

  ngOnInit(): void {
  }

}
