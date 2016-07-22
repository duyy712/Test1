import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroService }     from './hero.service';
import {LoginService} from './login.service';
@Component({
  selector: 'my-app',

  // template: `
  //   <h1>{{title}}</h1>
  //   <nav>
  //   <a [routerLink]="['/login']" routerLinkActive="active">Login</a>
  //   <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
  //   <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
  //   </nav>
  //  <router-outlet></router-outlet>
  // `,

  templateUrl: "app/app.component.html",

  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService, LoginService
  ],

})
export class AppComponent {
  title = 'Tour of Heroes';
}
