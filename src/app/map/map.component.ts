import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PlaceService} from '../place.service';
import {AcEntity, AcNotification, ActionType} from 'angular-cesium';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  places: AcNotification;
  placesTemp: BehaviorSubject<AcNotification> = new BehaviorSubject(this.places);
  showMe = false;

  constructor(private placeService: PlaceService) {
  }


  ngAfterViewInit() {
    setTimeout(() => {
      this.showMe = true;
    }, 30);
  }

  ngOnInit() {
    this.getPlaces();
    this.placesTemp.subscribe(() => {
    });
  }

  getPlaces(): void {
    this.placeService.getPlaces().subscribe(places => {
      places.forEach(p => {
        const data = {
          position: Cesium.Cartesian3.fromDegrees(p.lan, p.lat),
          point: {
            pixelSize: 10,
            color: Cesium.Color.YELLOW
          }
        };
        const point = new AcEntity(data);
        const entity = {
          id: p.id.toString(),
          entity: point,
          actionType: ActionType.ADD_UPDATE,
        };
        this.placesTemp.next(entity);
      });
    });
  }
}
