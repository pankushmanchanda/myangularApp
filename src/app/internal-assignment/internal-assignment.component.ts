import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-internal-assignment',
  templateUrl: './internal-assignment.component.html',
  styleUrls: ['./internal-assignment.component.css']
})

export class InternalAssignmentComponent implements OnInit {
  /** Global Variables */
  public assinmentType: boolean = true;
  public flagOtherDetails: boolean;
  public extensionflag: boolean = false;
  public selectAllDepent=false;
  public workPermitProcessingFlag: boolean = true;
  public dataSource: any = [];
  public visaType: any = [];
  public assignmentLocations: any = [];
  public assignmentForlist: any = [];
  public wiproDivisons: any = [];
  public sourceCountries: any = [];
  public destinationCountries = [];
  public viewSubtypes = [];
  public states: any = [];
  public cities: any = [];
  public projects: any = [];
  public customers: any = [];
  public authority: any = [];


  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    // Calling data service to get the data
    this.dataService.getJSON().subscribe((res) => {
      this.loadData(res);
    }, (err) => {

    });
    // based on the count base details will load
    if (this.dataSource.length > 1) {
      this.flagOtherDetails = true;
    } else {
      this.flagOtherDetails = false;
    }
  }
  /** Methos to select all the dependent */
  public selectAllDependent(flag): void {
    if (flag.checked) {
      this.selectAllDepent = true;
    } else {
      this.selectAllDepent = false;
    }
  }
  /** Method to load Fields based on visa type /work permut selection*/
  public setVisaType(type) {
    if (type.value === 1) {
      this.workPermitProcessingFlag = false;
      this.extensionflag = false;
      this.flagOtherDetails = true;
    } else if (type.value === 2) {
      this.workPermitProcessingFlag = false;
      this.extensionflag = false;
    }
    else if (type.value === 4) {
      this.workPermitProcessingFlag = true;
      this.extensionflag = true;
      this.flagOtherDetails = true;

    } else {
      this.workPermitProcessingFlag = true;
      this.extensionflag = false;
    }

  }
  /** Method to get the components based on assignment selection */
  public assignmentType(type) {
    if (type.value === "1") {
      this.router.navigate(['/internalAssignment']);
    } else {
      this.router.navigate(['/othersInternalAssignment']);
    }

  }

  /** Method to load the intial data */
  public loadData(response): void {
    this.assignmentLocations = response[0].AssignmentLocation;
    this.assignmentForlist = response[0].AssignmentFor;
    this.wiproDivisons = response[0].WiproDivison;
    this.sourceCountries = response[0].sourceCountry;
    this.destinationCountries = response[0].destinationCountry;
    this.viewSubtypes = response[0].viewSubType;
    this.states = response[0].state;
    this.cities = response[0].city;
    this.projects = response[0].projects;
    this.customers = response[0].customers;
    this.authority = response[0].authority;
    this.dataSource = response[0].dataSource;
    this.visaType = response[0].visaType;
  }
}
export interface Element {
  Application: string;
  destination: string;
  request: string;
}
const ELEMENT_DATA: Element[] = [
  { Application: 'IN-226963', destination: 'United States', request: 'H1B Cap Exempt Premium' }
];
