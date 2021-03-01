import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCoffeComponent } from './our-coffe.component';

describe('OurCoffeComponent', () => {
  let component: OurCoffeComponent;
  let fixture: ComponentFixture<OurCoffeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurCoffeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCoffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
