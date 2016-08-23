import { provideRouter, RouterConfig }  from '@angular/router';
import {LoginComponent} from './login.component';
import {GetReportComponent} from './get-report.component';

const routes: RouterConfig = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'getReport',
    component: GetReportComponent
  }
]
export const appRouterProviders = [
  provideRouter(routes)
];
