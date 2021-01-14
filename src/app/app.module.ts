import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiComponent } from './ui/ui.component';
import { KendoComponent } from './ui/kendo/kendo.component';
import {MatIconModule} from '@angular/material/icon';
 

import { MaterialComponent } from './ui/material/material.component';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { GridModule } from '@progress/kendo-angular-grid';
import { BarComponent } from './ui/bar/bar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatspinnerComponent } from './ui/matspinner/matspinner.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';

import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { MatstabComponent } from './ui/matstab/matstab.component';




import { InputsModule } from '@progress/kendo-angular-inputs';


@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    KendoComponent,
    MaterialComponent,
    BarComponent,
    MatspinnerComponent,
    MatstabComponent,
    
    
  ],
  imports: [
    BrowserModule,
    NavigationModule,
    BrowserAnimationsModule,
    IconsModule,
    LayoutModule,
    ChartsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatRadioModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatTabsModule,
    GridModule,
   
    RouterModule.forRoot([
      {
         path: 'ui',
         component: UiComponent
      },
      {
        path: 'kendo',
        component: KendoComponent
     },
     {
      path: 'material',
      component: MaterialComponent
   },
   {
    path: 'Bar',
    component: BarComponent
 },
 {
  path: 'matspinner',
  component: MatspinnerComponent
},
{
 path: 'matstab',
 component: MatstabComponent
}
 
 
   ])
  ],
  providers: [],

  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
