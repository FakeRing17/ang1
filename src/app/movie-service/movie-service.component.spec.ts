import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieServiceComponent } from './movie-service.component';

describe('MovieServiceComponent', () => {
  let component: MovieServiceComponent;
  let fixture: ComponentFixture<MovieServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieServiceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
