import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { routes } from "./app.routes";
import { ApplyComponent } from "./apply/apply.component";
import { SelfComponent } from "./self/self.component";
import { RetreatsComponent } from "./retreats/retreats.component";
import { FaqComponent } from "./faq/faq.component";
import { TeachersComponent } from "./teachers/teachers.component";
import { DailyComponent } from "./daily/daily.component";
import { EthicsComponent } from "./ethics/ethics.component";
import { TtcComponent } from "./ttc/ttc.component";
import { KundaliniComponent } from "./kundalini/kundalini.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApplyComponent,
    SelfComponent,
    RetreatsComponent,
    FaqComponent,
    TeachersComponent,
    DailyComponent,
    EthicsComponent,
    TtcComponent,
    KundaliniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
