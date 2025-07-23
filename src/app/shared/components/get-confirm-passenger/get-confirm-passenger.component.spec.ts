import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetConfirmPassengerComponent } from './get-confirm-passenger.component';

describe('GetConfirmPassengerComponent', () => {
  let component: GetConfirmPassengerComponent;
  let fixture: ComponentFixture<GetConfirmPassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetConfirmPassengerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetConfirmPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
