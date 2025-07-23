import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetConfirmStudnetComponent } from './get-confirm-studnet.component';

describe('GetConfirmStudnetComponent', () => {
  let component: GetConfirmStudnetComponent;
  let fixture: ComponentFixture<GetConfirmStudnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetConfirmStudnetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetConfirmStudnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
