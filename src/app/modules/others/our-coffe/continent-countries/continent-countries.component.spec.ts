import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentCountriesComponent } from './continent-countries.component';

describe('ContinentCountriesComponent', () => {
  let component: ContinentCountriesComponent;
  let fixture: ComponentFixture<ContinentCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinentCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
