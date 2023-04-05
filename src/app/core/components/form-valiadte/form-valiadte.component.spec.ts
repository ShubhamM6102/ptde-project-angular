import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValiadteComponent } from './form-valiadte.component';

describe('FormValiadteComponent', () => {
  let component: FormValiadteComponent;
  let fixture: ComponentFixture<FormValiadteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValiadteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValiadteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
