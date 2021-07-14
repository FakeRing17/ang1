import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XinChaoComponent } from './xin-chao.component';

describe('XinChaoComponent', () => {
  let component: XinChaoComponent;
  let fixture: ComponentFixture<XinChaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XinChaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XinChaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
