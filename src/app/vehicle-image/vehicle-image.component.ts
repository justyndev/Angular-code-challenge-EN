import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ImageState } from './vehicle-image-state/vehicle-image.actions';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-vehicle-image',
  templateUrl: './vehicle-image.component.html',
  styleUrls: ['./vehicle-image.component.css']
})
export class VehicleImageComponent implements OnInit, OnDestroy {
  public selectedImage = '';
  onDestroy$: Subject<void> = new Subject();

  constructor(private store: Store<{ image: ImageState }>) {}

  ngOnInit() {
    this.store.pipe(takeUntil(this.onDestroy$), select(state => state.image.imageUrl))
    .subscribe(imageUrl => this.selectedImage = imageUrl);
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
