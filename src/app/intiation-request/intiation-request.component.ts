import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-intiation-request',
  templateUrl: './intiation-request.component.html',
  styleUrls: ['./intiation-request.component.css']
})
export class IntiationRequestComponent implements OnInit {
  /**local variables */
  public assignmentLocations: any = [];
  public assignmentForlist: any = [];
  public wiproDivisons: any = [];
  public sourceCountries: any = [];
  public destinationCountries = [];
  public viewSubtypes = [];
  public states: any = [];
  public cities: any = [];
  public projects:any=[];
  public customers:any=[];
  public authority:any=[];

  constructor(private dataService: DataService, private http: HttpClient) { }

  ngOnInit() {
    // Calling data service to get the data
    this.dataService.getJSON().subscribe((res) => {
      this.loadData(res);
    }, (err) => {

    });
  }
  /** Method to load the intial data */
  public loadData(response): void {
    this.assignmentLocations=response[0].AssignmentLocation;
    this.assignmentForlist=response[0].AssignmentFor;
    this.wiproDivisons=response[0].WiproDivison;
    this.sourceCountries=response[0].sourceCountry;
    this.destinationCountries=response[0].destinationCountry;
    this.viewSubtypes=response[0].viewSubType;
    this.states=response[0].state;
    this.cities=response[0].city;
    this.projects=response[0].projects;
    this.customers=response[0].customers;
    this.authority=response[0].authority;
  }
}
