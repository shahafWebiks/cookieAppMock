import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PlaceDetailComponent} from './place-detail/place-detail.component';
import {PlacesComponent} from './places/places.component';
import {WeatherComponent} from './weather/weather.component';

export const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: PlaceDetailComponent},
  {path: 'places', component: PlacesComponent},
  {path: 'weather', component: WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
