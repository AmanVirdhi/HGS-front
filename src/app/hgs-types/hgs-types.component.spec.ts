import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HgsTypesComponent } from './hgs-types.component';

describe('HgsTypesComponent', () => {
  let component: HgsTypesComponent;
  let fixture: ComponentFixture<HgsTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HgsTypesComponent]
    });
    fixture = TestBed.createComponent(HgsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
