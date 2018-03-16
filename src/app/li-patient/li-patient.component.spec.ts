import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiPatientComponent } from './li-patient.component';

describe('LiPatientComponent', () => {
  let component: LiPatientComponent;
  let fixture: ComponentFixture<LiPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
