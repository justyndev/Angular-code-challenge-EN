import { Component, Input, OnInit } from '@angular/core';
import { VehicleModel } from '../models/vehicle.model';
import { vehicleProps } from '../models/vehicle.constants';

import { KentekenCheck } from 'rdw-kenteken-check'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ImageState, setImageUrl } from '../vehicle-image/vehicle-image-state/vehicle-image.actions';
import { VehicleFormState, submitVehicleForm } from './vehicle-form-state/vehicle-form.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  @Input() vehicleProps: VehicleModel[] = [];
  @Input() vehicleSubtypes: any = {};

  public vehicleForm!: FormGroup;
  public selectedImage: string = vehicleProps[0].image;
  public licensePlate: string = '';
  public isValidFormat = false;
  public vehicleData$: Observable<any> | undefined

  constructor(private fb: FormBuilder, private store: Store<{ image: ImageState, vehicleForm: VehicleFormState}>) {}

  ngOnInit() {
    this.vehicleForm = this.fb.group({
      selectedType: ['Auto', Validators.required],
      selectedSubtype: ['Hatchback', Validators.required],
      licensePlate: ['',  Validators.required]
    });
    this.changeInputValue();
  }

  public onLicenseChange(event: Event) {
    const target = event.target as HTMLInputElement;
    let inputValue = target.value.replace(/-/g, '');
    inputValue = inputValue.toUpperCase();
    const formattedText = inputValue.replace(/(.{2})/g, '$1-').replace(/-$/, '');

    target.value = formattedText;
    this.licensePlate = formattedText;
    this.checkLicenseNumber();
  }

  public getAvailableSubtypes() {
    const selectedType = this.vehicleForm.get('selectedType')?.value;
    return this.vehicleSubtypes[selectedType] || [];
  }

  public onSubmit() {
    if (this.vehicleForm.valid) {
    const formData = this.vehicleForm.value;
    this.store.dispatch(submitVehicleForm(formData))
    this.vehicleData$ = this.store.select('vehicleForm');
    }
  }

  private checkLicenseNumber() {
    const kt = new KentekenCheck(this.licensePlate);
    kt.formatLicense();
    kt.bindInputListener();
    this.isValidFormat = kt.valid;
  }

  private setSelectedSubtype(selectedType: string) {
    const subtypeMap: Record<string, string> = {
      Auto: 'Hatchback',
      Motor: 'All-road',
    };
  
    this.vehicleForm.get('selectedSubtype')?.setValue(subtypeMap[selectedType] || '');
  }
  
  private updateImage() {
    const selectedType = this.vehicleForm.get('selectedType')?.value;
    const selectedVehicle = this.vehicleProps.find(vehicle => vehicle.type === selectedType);
  
    this.selectedImage = selectedVehicle ? selectedVehicle.image : this.vehicleProps[0].image;
    this.store.dispatch(setImageUrl(this.selectedImage));
  }

  private changeInputValue() {
    this.vehicleForm.get('selectedType')?.valueChanges.subscribe((selectedType) => {
      if (selectedType === 'Scooter') {
        this.vehicleForm.get('selectedSubtype')?.disable();
      } else {
        this.vehicleForm.get('selectedSubtype')?.enable();
      }
      this.setSelectedSubtype(selectedType);
      this.updateImage();
    });
  }

}
