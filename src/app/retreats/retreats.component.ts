import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-retreats',
  templateUrl: './retreats.component.html',
  styleUrls: ['./retreats.component.css']
})
export class RetreatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.toasty').addClass('show');
  }

}
