import { Component } from '@angular/core';
import * as $ from "jquery";
import { animate, transition, trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-kundalini',
  templateUrl: './kundalini.component.html',
  styleUrls: ['./kundalini.component.css'],
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
export class KundaliniComponent {

  constructor() { }

  // ngOnInit() {
  //   $('.toasty').addClass('show');
  // }

}
