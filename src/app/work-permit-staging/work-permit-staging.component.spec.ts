import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPermitStagingComponent } from './work-permit-staging.component';

describe('WorkPermitStagingComponent', () => {
  let component: WorkPermitStagingComponent;
  let fixture: ComponentFixture<WorkPermitStagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkPermitStagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPermitStagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
