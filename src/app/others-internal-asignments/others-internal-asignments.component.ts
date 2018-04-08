import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-others-internal-asignments',
  templateUrl: './others-internal-asignments.component.html',
  styleUrls: ['./others-internal-asignments.component.css']
})
export class OthersInternalAsignmentsComponent implements OnInit {

  assinmentType: boolean = true;
  flagOtherDetails: boolean;
  selectAllDepent = false;
  workPermitProcessingFlag: boolean = true;
  WorkPermitStagingFlag:boolean=false;

  dataSource = [
    { Application: 'IN-226963', destination: 'United States', request: 'H1B Cap Exempt Premium' },
    { Application: 'IN-226963', destination: 'United States', request: 'H1B Cap Exempt Premium' }
  ];
  visaType = [
    { value: 1, viewValue: 'Work Permit Processing' },
    { value: 2, viewValue: 'Work Permit Stamping' },
    { value: 3, viewValue: 'Others' }]
  constructor(private router: Router) { }

  ngOnInit() {
    if (this.dataSource.length > 1) {
      this.flagOtherDetails = true;
    } else {
      this.flagOtherDetails = false;
    }
  }
  selectAllDependent(flag): void {
    if (flag.checked) {
      this.selectAllDepent = true;
    } else {
      this.selectAllDepent = false;
    }
  }
  setVisaType(type) {
    if (type.value === 1) {
      this.workPermitProcessingFlag = false;
      this.WorkPermitStagingFlag = false;
    } else if (type.value === 2) {
      this.WorkPermitStagingFlag = true;
      // this.router.navigate(['othersInternalAssignment/workPermitStaging']);
    } else {
      this.workPermitProcessingFlag = true;
      this.WorkPermitStagingFlag = false;
    }

  }
  assignmentType(type) {
    if (type.value === "1") {
      this.router.navigate(['/internalAssignment']);
    } else {
      this.router.navigate(['/othersInternalAssignment']);
    }

  }
}
export interface Element {
  Application: string;
  destination: string;
  request: string;
}


