import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Redux
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPopulation from './store/reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPopulation.authFeatureKey, fromPopulation.reducers),
    EffectsModule.forFeature([
    ])
  ]
})
export class PopulationModule { }
