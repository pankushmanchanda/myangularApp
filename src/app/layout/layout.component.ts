import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public title: string;
  public show: boolean = false;
  constructor(private zone: NgZone) { }

  ngOnInit() {
  }
  openMeu() {
    if (!this.show) {
      document.getElementById("mySidenav").style.width = "15%";
      this.show = true;
    }else{
      document.getElementById("mySidenav").style.width = "4%";
      this.title = "";
      this.show = false;
    }
  }


}
