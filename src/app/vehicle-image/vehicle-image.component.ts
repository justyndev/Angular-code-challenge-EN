import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ImageState } from './vehicle-image-state/vehicle-image.actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-vehicle-image',
  templateUrl: './vehicle-image.component.html',
  styleUrls: ['./vehicle-image.component.css']
})
export class VehicleImageComponent implements OnInit {
  public selectedImage$: Observable<any> | undefined;

  constructor(private store: Store<{ image: ImageState }>) {}

  ngOnInit() {
    this.selectedImage$ = this.store.select('image');
  }
}
