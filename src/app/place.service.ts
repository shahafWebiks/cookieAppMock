import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {MessageService} from './message.service';
import {PLACES} from './mock-places';
import {Place} from './place';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {MessageListState} from './store/message.state';
import * as MessageAction from './store/message.action';
import {Store} from '@ngrx/store';

const KEY = 'e76868e4617fa9179c42aa2672b286b5';

@Injectable()
export class PlaceService {
  constructor(private store: Store<MessageListState>,
              private http: HttpClient) {
  }

  id: number;

  getPlaces(): Observable<Place[]> {
    this.log('fetched places');
    return of(PLACES);
  }

  getPlace(id: number): Observable<Place> {
    this.log(`fetched place id=${id}`);
    const placeFind = PLACES.find(place => place.id === id);
    this.id = id;
    return of(placeFind);
  }

  requestWeatherApi(city: string, country: string): Observable<any> {
    this.log(`fetched place city=${city} weather`);
    return this.http.get<any>(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${KEY}`).pipe(
      tap(_ => this.log(`fetched place city=${city}`)),
      catchError(this.handleError<Place>(`getPlace city=${city}`))
    );
  }

  private log(message: string) {
    // this.messageService.add('PlaceService: ' + message);
    this.store.dispatch(new MessageAction.AddMessage(message));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
