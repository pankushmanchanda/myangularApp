import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-initiation',
  templateUrl: './initiation.component.html',
  styleUrls: ['./initiation.component.css']
})
export class InitiationComponent implements OnInit {
  requestedProfile = [];
  services = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.services.push({
      serviceName: 'Internal Assignment', url: '/internalAssignment'
    });
  }
/* To load the different component based on service request selection */ 
  serviceCall(services): void {
    this.router.navigate([services.url]);
  }

  /* To load the different component based on service request selection */ 
  requestService(searchTerm): void {
    if (searchTerm) {
      this.requestedProfile = this.services.filter(services => {
        return services.serviceName.toLowerCase().startsWith(searchTerm.toLowerCase());
      })
    } else {
      this.requestedProfile = this.services.slice(0, 10);
    }

  }
}
