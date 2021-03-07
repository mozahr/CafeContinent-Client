import { NgModule } from '@angular/core';

import { OurCoffeComponent } from './our-coffe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContinentCountriesComponent } from './continent-countries/continent-countries.component';
import { ContinentSelectionComponent } from './continent-selection/continent-selection.component';
import { ComponentModule } from 'src/app/shared/components/components.module';
import { CommonModule } from '@angular/common';
import { OurCoffeRoutingModule } from './our-coffe-routing.module';


@NgModule({
  declarations: [
    OurCoffeComponent,
    ContinentCountriesComponent,
    ContinentSelectionComponent
  ],
  imports: [
    CommonModule ,
    ComponentModule,
    OurCoffeRoutingModule
  ],
  providers: [],
  // bootstrap: [WebsiteComponent]
})
export class OurCoffeModule { }
