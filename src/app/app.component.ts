import { Component } from '@angular/core';
import { vehicleProps, vehicleSubtypes } from './models/vehicle.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public vehicleProps = vehicleProps;
  public vehicleSubtypes = vehicleSubtypes;
}
