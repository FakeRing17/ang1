import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputchangeComponent } from './inputchange.component';

describe('InputchangeComponent', () => {
  let component: InputchangeComponent;
  let fixture: ComponentFixture<InputchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
