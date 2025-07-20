import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetConfirmPassComponent } from './get-confirm-pass.component';

describe('GetConfirmPassComponent', () => {
  let component: GetConfirmPassComponent;
  let fixture: ComponentFixture<GetConfirmPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetConfirmPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetConfirmPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
