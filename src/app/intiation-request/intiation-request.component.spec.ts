import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntiationRequestComponent } from './intiation-request.component';

describe('IntiationRequestComponent', () => {
  let component: IntiationRequestComponent;
  let fixture: ComponentFixture<IntiationRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntiationRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntiationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
