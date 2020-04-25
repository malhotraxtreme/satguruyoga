import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  /**
   *
   */
  constructor(private router: Router) {
    this.chkDt();
  }
  title = "satguruyoga";
  year = (new Date().getFullYear());
  validator= true;

  ngOnInit() {
    setTimeout(() => {
      $(".loadscreen").fadeOut("slow");
    }, 1000);

    //$('.toasty').removeClass('show');

  }

  public hideMenu() {
    $("#menuToggle").prop('checked', false);
  }

  public openMsg() {
    this.router.navigate(['/apply']);
  }

  public chkDt(){
    let dt = new Date();
    if(dt.getFullYear()<=2020 && dt.getMonth()<=6 ){
      this.validator =true;
    }
    else{ 
      this.validator = false;
    }
  }

  // myFunction() {
  //   var x = document.getElementById("myNav");
  //   if (x.className === "topnav") {
  //     x.className += " responsive";
  //   } else {
  //     x.className = "topnav";
  //   }
  // }
}
