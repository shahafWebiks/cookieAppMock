import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {PlaceService} from '../place.service';
import {Place} from '../place';
import {Weather} from '../weather';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: Weather;

  constructor(private location: Location,
              private placeService: PlaceService) {
  }

  ngOnInit() {
    this.requestWeatherApi();
  }

  requestWeatherApi(): void {
    let id;
    let place = new Place();
    if (!this.placeService.id) {
      this.placeService.id = 1;
    }
    id = this.placeService.id;
    this.placeService.getPlace(id)
      .subscribe(myPlace => place = myPlace);
    this.placeService.requestWeatherApi(place.city, place.country)
      .subscribe(weatherApi => {
          this.weather = new Weather(weatherApi);
        }
      );
  }

  goBack(): void {
    this.location.back();
  }
}
