import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonilComponent } from './testimonil.component';

describe('TestimonilComponent', () => {
  let component: TestimonilComponent;
  let fixture: ComponentFixture<TestimonilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
