import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievanceListComponent } from './grievance-list.component';

describe('GrievanceListComponent', () => {
  let component: GrievanceListComponent;
  let fixture: ComponentFixture<GrievanceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrievanceListComponent]
    });
    fixture = TestBed.createComponent(GrievanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
