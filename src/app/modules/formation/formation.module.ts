
import { NgModule } from '@angular/core';

import { FormationComponent } from './pages/formation/formation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ComponentModule } from 'src/app/shared/components/components.module';
import { FormationRoutingModule } from './formation-routing.module';

@NgModule({
  declarations: [
    FormationComponent,

  ],
  imports: [
    CommonModule,
    ComponentModule,
    FormationRoutingModule
  ],
  providers: [],
  // bootstrap: [WebsiteComponent]
})
export class FormationModule { }
