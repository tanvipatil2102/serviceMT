import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetConfirmTodoComponent } from './get-confirm-todo.component';

describe('GetConfirmTodoComponent', () => {
  let component: GetConfirmTodoComponent;
  let fixture: ComponentFixture<GetConfirmTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetConfirmTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetConfirmTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
