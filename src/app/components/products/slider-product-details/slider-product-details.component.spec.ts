import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderProductDetailsComponent } from './slider-product-details.component';

describe('SliderProductDetailsComponent', () => {
  let component: SliderProductDetailsComponent;
  let fixture: ComponentFixture<SliderProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderProductDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
