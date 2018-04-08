import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersInternalAsignmentsComponent } from './others-internal-asignments.component';

describe('OthersInternalAsignmentsComponent', () => {
  let component: OthersInternalAsignmentsComponent;
  let fixture: ComponentFixture<OthersInternalAsignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersInternalAsignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersInternalAsignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
