import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalAssignmentComponent } from './internal-assignment.component';

describe('InternalAssignmentComponent', () => {
  let component: InternalAssignmentComponent;
  let fixture: ComponentFixture<InternalAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
