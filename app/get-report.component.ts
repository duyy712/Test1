import { Component, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GetReportService} from './get-report.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'get-report',
  templateUrl: 'app/get-report.component.html',
  providers: [GetReportService]

})
export class GetReportComponent {

  constructor(public getReportService: GetReportService, public router: Router) { }

  getReport() {
    this.getReportService.getReport().
      subscribe((res: any) => {
        //console.log(res)
      })
  }
}

