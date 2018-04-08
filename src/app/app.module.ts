

/* -Common Modules starts 
   -Created by Pankush Manchanda on April , 2018 
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

/* Common Modules ends */

/* Angular Material Modules starts */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; BrowserAnimationsModule
import { MaterialModule } from './material.module';
import { LayoutComponent } from './layout/layout.component';
import { InitiationComponent } from './initiation/initiation.component';
import { InternalAssignmentComponent } from './internal-assignment/internal-assignment.component';
import { IntiationRequestComponent } from './intiation-request/intiation-request.component';
import { OthersInternalAsignmentsComponent } from './others-internal-asignments/others-internal-asignments.component';
import { WorkPermitStagingComponent } from './work-permit-staging/work-permit-staging.component';
import { DataService } from './service/data.service';
/* Angular Material Modules ends */


/* Routes */
const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{
      path: '',
      component: InitiationComponent,
      children: [{
        path: '',
        component: IntiationRequestComponent
      },
      {
        path: 'internalAssignment',
        component: InternalAssignmentComponent
      },
      {
        path: 'othersInternalAssignment',
        component: OthersInternalAsignmentsComponent,
        children:[{
          path:'workPermitStaging',
          component:WorkPermitStagingComponent
        }]
      }]
    }],
  }];


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    InitiationComponent,
    InternalAssignmentComponent,
    IntiationRequestComponent,
    OthersInternalAsignmentsComponent,
    WorkPermitStagingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true ,useHash:true }
      // <-- debugging purposes only
    )
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
