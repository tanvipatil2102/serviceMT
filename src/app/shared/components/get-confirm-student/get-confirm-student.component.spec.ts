import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetConfirmStudentComponent } from './get-confirm-student.component';

describe('GetConfirmStudentComponent', () => {
  let component: GetConfirmStudentComponent;
  let fixture: ComponentFixture<GetConfirmStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetConfirmStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetConfirmStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
