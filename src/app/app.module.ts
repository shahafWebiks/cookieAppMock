import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import {AppComponent} from './app.component';
import {PlacesComponent} from './places/places.component';
import {PlaceDetailComponent} from './place-detail/place-detail.component';
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './message.service';
import {PlaceService} from './place.service';
import {AppRoutingModule} from './/app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MapComponent} from './map/map.component';
import {AngularCesiumModule} from 'angular-cesium';
import {WeatherComponent} from './weather/weather.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import * as MessageReducer from './store/message.reducer';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularCesiumModule.forRoot(),
    StoreModule.forRoot({messages: MessageReducer.MessageReducer})
  ],
  declarations: [
    AppComponent,
    PlacesComponent,
    PlaceDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MapComponent,
    WeatherComponent
  ],
  providers: [
    PlaceService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
