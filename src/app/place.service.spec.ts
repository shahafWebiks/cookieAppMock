import {TestBed, inject} from '@angular/core/testing';
// import configureMockStore from 'redux-mock-store';
import {PlaceService} from './place.service';
import {PLACES} from './mock-places';
import {Store, StoreModule} from '@ngrx/store';
import {MessageListState} from './store/message.state';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpTestingController} from '@angular/common/http/testing';
import {async} from '@angular/core/testing';
import {log} from 'util';

const KEY = 'e76868e4617fa9179c42aa2672b286b5';

function mockReducer() {
}

describe('PlaceService', () => {
  const mockPlace = {id: 1, name: 'place 1', city: 'Tel Aviv', country: 'IL', num_cookies: 2, num_coffee: 3, lan: 34.78, lat: 32.08};
  const placesListLength = PLACES.length;
  const mockCity = 'Tel Aviv';
  const mockCountry = 'IL';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(mockReducer),
        HttpClientModule
      ],
      providers: [
        PlaceService,
        HttpTestingController
      ]
    });
  });
    it('getPlace function', inject([PlaceService], (service: PlaceService) => {
      service.getPlace(1).subscribe(value => {
        expect(value.name).toBe(mockPlace.name);
      });
    }));
    it('getPlaces list length', inject([PlaceService], (service: PlaceService) => {
      service.getPlaces().subscribe(value => {
        expect(value.length).toBe(placesListLength);
        expect(value.length).not.toBe(placesListLength - 1);
      });
    }));
  it('GET Weather request', async(inject([HttpClient, HttpTestingController],
    (http: HttpClient, backend: HttpTestingController) => {
      http.get(`http://api.openweathermap.org/data/2.5/weather?q=${mockCity},${mockCountry}&units=metric&appid=${KEY}`).subscribe();
      backend.match(`http://api.openweathermap.org`);
      backend.verify();
    })));
});
