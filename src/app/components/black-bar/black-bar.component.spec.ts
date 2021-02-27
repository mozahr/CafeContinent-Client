import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackBarComponent } from './black-bar.component';

describe('BlackBarComponent', () => {
  let component: BlackBarComponent;
  let fixture: ComponentFixture<BlackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
