import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

import {
  trigger,
  state,
  transition,
  style,
  animate
} from "@angular/animations";

@Component({
  selector: 'app-ethics',
  templateUrl: './ethics.component.html',
  styleUrls: ['./ethics.component.css'],
  animations: [
    trigger("fade1", [
      state("void", style({ opacity: 0, transform: "scale(0.75)" })),
      transition(":enter", [animate("500ms 500ms ease")])
    ]),
    trigger("fade2", [
      state("void", style({ opacity: 0, transform: "scale(0.75)" })),
      transition(":enter", [animate("300ms 1000ms ease")])
    ]),
    trigger("fade3", [
      state("void", style({ opacity: 0, transform: "scale(0.75)" })),
      transition(":enter", [animate("300ms 1500ms ease")])
    ]),
    trigger("fade4", [
      state("void", style({ opacity: 0, transform: "scale(0.75)" })),
      transition(":enter", [animate("300ms 2000ms ease")])
    ])
  ]
})
export class EthicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.toasty').removeClass('show');
  }

}
