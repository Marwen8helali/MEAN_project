import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppCartComponent } from './shopp-cart.component';

describe('ShoppCartComponent', () => {
  let component: ShoppCartComponent;
  let fixture: ComponentFixture<ShoppCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
