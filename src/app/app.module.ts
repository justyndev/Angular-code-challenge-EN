import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { VehicleImageComponent } from './vehicle-image/vehicle-image.component';
import { StoreModule } from '@ngrx/store';
import { imageReducer } from './vehicle-image/vehicle-image-state/vehicle-image.reducer';
import { vehicleFormReducer } from './vehicle-form/vehicle-form-state/vehicle-form.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent,
    VehicleImageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ image: imageReducer, vehicleForm: vehicleFormReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
